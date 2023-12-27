import { axiosClient } from '@/utils/axiosClient';

export const signIn = async (params: SignInData) => {
  const url = '/auth/signin';
  return await axiosClient.post(url, params);
};

export const signUp = async (params: SignUpData) => {
  const url = '/auth/signup';
  return await axiosClient.post(url, params);
};
