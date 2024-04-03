'use client';

import type { TokenResponse } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import type { FormEvent } from 'react';
import React, { useState } from 'react';

import { signIn } from '@/context/auth/reducer';
import useAuth from '@/hook/useAuth';
import { handleGoogleSignIn, handleSignIn } from '@/service/auth.service';

export default function SignInForm(): React.ReactElement {
  // =================EMAIL LOGIN=================
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useAuth();
  const router: AppRouterInstance = useRouter();
  const onEmailChange = (event: FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordChange = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { user, accessToken } = await handleSignIn({ email, password });
    localStorage.setItem('ACCESS_TOKEN', accessToken);
    dispatch(signIn({ user }));
    enqueueSnackbar('Login successfully', { variant: 'success' });
    router.push('/');
  };

  const googleSignIn = useGoogleLogin({
    onSuccess: async (res: TokenResponse) => {
      const user = await handleGoogleSignIn(res);
      localStorage.setItem('ACCESS_TOKEN', user.accessToken);
      dispatch(signIn({ user }));
      enqueueSnackbar('Login successfully', { variant: 'success' });
      router.push('/');
    },
    onError: (err) => enqueueSnackbar(err.error, { variant: 'error' }),
  });

  return (
    <>
      <section className="our-login">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="main-title text-center">
                <h2 className="title">Log In</h2>
                <p className="paragraph">
                  Give your visitor a smooth online experience with a solid UX
                  design
                </p>
              </div>
            </div>
          </div>
          <div className="row wow fadeInRight" data-wow-delay="300ms">
            <div className="col-xl-6 mx-auto">
              <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                <div className="mb30">
                  <h4>We're glad to see you again!</h4>
                  <p className="text">
                    Don't have an account?{' '}
                    <Link href="/signup" className="text-thm">
                      Sign Up!
                    </Link>
                  </p>
                </div>
                <form onSubmit={onSubmit}>
                  <div className="mb20">
                    <label className="form-label fw600 dark-color">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="alitfn58@gmail.com"
                      value={email}
                      onChange={onEmailChange}
                      required
                    />
                  </div>
                  <div className="mb15">
                    <label className="form-label fw600 dark-color">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="*******"
                      onChange={onPasswordChange}
                      required
                    />
                  </div>
                  <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb20">
                    <label className="custom_checkbox fz14 ff-heading">
                      Remember me
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark" />
                    </label>
                    <a href="/signin" className="fz14 ff-heading">
                      Lost your password?
                    </a>
                  </div>
                  <div className="d-grid mb20">
                    <button className="ud-btn btn-thm" type="submit">
                      Log In <i className="fal fa-arrow-right-long" />
                    </button>
                  </div>
                </form>
                <div className="hr_content mb20">
                  <hr />
                  <span className="hr_top_text">OR</span>
                </div>
                <div className="d-grid mb20">
                  <button
                    className="ud-btn btn-google"
                    type="button"
                    onClick={() => googleSignIn()}
                  >
                    <i className="fab fa-google" /> Continue Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
