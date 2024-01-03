'use client';

import { type TokenResponse, useGoogleLogin } from '@react-oauth/google';
import Link from 'next/link';
import type { FormEvent } from 'react';
import React, { useState } from 'react';

import { signIn } from '@/context/auth/reducer';
import useAuth from '@/hook/useAuth';
import {
  handleGoogleSignIn,
  handleSignIn,
  handleSignUp,
} from '@/service/auth.service';

export default function SignUpForm(): React.ReactElement {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const { dispatch } = useAuth();
  const onEmailChange = (event: FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordChange = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const onFullNameChange = (event: FormEvent<HTMLInputElement>) => {
    setFullName(event.currentTarget.value);
  };
  const onPhoneNumberChange = (event: FormEvent<HTMLInputElement>) => {
    setPhoneNumber(event.currentTarget.value);
  };

  const onSubmit = async () => {
    const { user, accessToken } = await handleSignUp({ email, password });
    localStorage.setItem('ACCESS_TOKEN', accessToken);
    dispatch(signIn({ user }));
  };

  const googleSignIn = useGoogleLogin({
    onSuccess: async (res: TokenResponse) => {
      const user = await handleGoogleSignIn(res);
      localStorage.setItem('ACCESS_TOKEN', user.accessToken);
      dispatch(signIn({ user }));
    },
    onError: (err) => console.error(err),
  });
  return (
    <>
      <section className="our-register">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="main-title text-center">
                <h2 className="title">Register</h2>
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
                  <h4>Let's create your account!</h4>
                  <p className="text mt20">
                    Already have an account?{' '}
                    <Link href="/login" className="text-thm">
                      Log In!
                    </Link>
                  </p>
                </div>
                <form onSubmit={onSubmit}>
                  <div className="mb25">
                    <label className="form-label fw500 dark-color">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ali"
                    />
                  </div>
                  <div className="mb25">
                    <label className="form-label fw500 dark-color">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="alitfn58@gmail.com"
                      value={email}
                      onChange={onEmailChange}
                    />
                  </div>
                  <div className="mb25">
                    <label className="form-label fw500 dark-color">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="0123456789"
                      value={phoneNumber}
                      onChange={onPhoneNumberChange}
                    />
                  </div>
                  <div className="mb15">
                    <label className="form-label fw500 dark-color">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="*******"
                      onChange={onPasswordChange}
                    />
                  </div>
                  <div className="d-grid mb20">
                    <button
                      className="ud-btn btn-thm default-box-shadow2"
                      type="submit"
                    >
                      Create Account <i className="fal fa-arrow-right-long" />
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
