'use client';

import { type TokenResponse, useGoogleLogin } from '@react-oauth/google';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import type { FormEvent } from 'react';
import React, { useState } from 'react';

import { signIn } from '@/context/auth/reducer';
import useAuth from '@/hook/useAuth';
import type { IUser } from '@/interface/entities/user.interface';
import { handleGoogleSignIn, handleSignUp } from '@/service/auth.service';

export default function SignUpForm(): React.ReactElement {
  const { dispatch } = useAuth();
  const router: AppRouterInstance = useRouter();

  const [profile, setProfile] = useState<IUser>();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!profile) {
      enqueueSnackbar('Please write in your information', {
        variant: 'error',
      });
      return;
    }
    const { user, accessToken } = await handleSignUp(profile);
    localStorage.setItem('ACCESS_TOKEN', accessToken);
    dispatch(signIn({ user }));
    enqueueSnackbar('Sign Up successfully', { variant: 'success' });
    router.push('/');
  };

  const googleSignIn = useGoogleLogin({
    onSuccess: async (res: TokenResponse) => {
      const user = await handleGoogleSignIn(res);
      localStorage.setItem('ACCESS_TOKEN', user.accessToken);
      dispatch(signIn({ user }));
      enqueueSnackbar('Sign Up successfully', { variant: 'success' });
      router.push('/');
    },
    onError: (err) => enqueueSnackbar(err.error, { variant: 'error' }),
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
                    <Link href="/signin" className="text-thm">
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
                      value={profile?.full_name || ''}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          full_name: e.currentTarget.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb25">
                    <label className="form-label fw500 dark-color">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="alitfn58@gmail.com"
                      value={profile?.email || ''}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          email: e.currentTarget.value,
                        })
                      }
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
                      value={profile?.phone || ''}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          phone: e.currentTarget.value,
                        })
                      }
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
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          password: e.currentTarget.value,
                        })
                      }
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
