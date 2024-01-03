import type { TokenResponse } from '@react-oauth/google';
import axios from 'axios';

import { axiosClient } from '@/utils/axiosClient';

export const reqSignIn = async (params: SignInData) => {
  const url = '/auth/login';
  return await axiosClient.post(url, params);
};

export const reqGoogleSignIn = async (googleRes: TokenResponse) => {
  const url = '/auth/google';
  return await axiosClient.post(url, googleRes);
};

export const reqSignUp = async (params: SignUpData) => {
  const url = '/auth/signup';
  return await axiosClient.post(url, params);
};

export const reqVerify = async () => {
  const url = '/auth/verify';
  return await axiosClient.get(url);
};
