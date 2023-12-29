import { axiosClient } from '@/utils/axiosClient';

export const reqSignIn = async (params: SignInData) => {
  const url = '/auth/login';
  return await axiosClient.post(url, params);
};

export const reqSignUp = async (params: SignUpData) => {
  const url = '/auth/signup';
  return await axiosClient.post(url, params);
};

export const reqVerify = async () => {
  console.log('verify');
  const url = '/auth/verify';
  return await axiosClient.get(url);
};
