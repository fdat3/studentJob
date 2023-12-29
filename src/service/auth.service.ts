import type { AxiosResponse } from 'axios';

import { reqSignIn, reqSignUp } from '@/api/auth';

export const handleSignIn = async (params: SignInData) => {
  const res: AxiosResponse = await reqSignIn(params);
  const userInfo = res.data.data;

  if (userInfo) {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }
  return res;
};

export const handleSignUp = async (params: SignUpData) => {
  try {
    const res: AxiosResponse = await reqSignUp(params);
    console.info('signUp', res);
    return res;
  } catch (error) {
    console.error('signUp', error);
    throw error;
  }
};
