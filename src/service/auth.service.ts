import type { AxiosResponse } from 'axios';

import { reqGoogleSignIn, reqSignIn, reqSignUp } from '@/api/auth';

export interface AuthDto {
  accessToken: string;
  user: any;
}
export const handleSignIn = async (params: SignInData): Promise<AuthDto> => {
  try {
    const res: AxiosResponse = await reqSignIn(params);
    const { data: user, token: accessToken } = res.data;

    if (res.status === 200 && user) {
      localStorage.setItem('userInfo', JSON.stringify(user));
    }
    return { user, accessToken };
  } catch (error) {
    console.error('ERROR ==>', error);
    throw error;
  }
};

export const handleGoogleSignIn = async (params: any): Promise<any> => {
  try {
    const res: AxiosResponse = await reqGoogleSignIn(params);
    const { data: user, token: accessToken } = res.data;

    if (res.status === 200 && user) {
      localStorage.setItem('userInfo', JSON.stringify(user));
    }
    return { user, accessToken };
  } catch (error) {
    console.error('ERROR ==>', error);
    throw error;
  }
};

export const handleSignUp = async (params: SignUpData) => {
  try {
    const res: AxiosResponse = await reqSignUp(params);
    const { data: user, token: accessToken } = res.data;
    if (res.status === 201 && user) {
      localStorage.setItem('userInfo', JSON.stringify(user));
    }
    return { user, accessToken };
  } catch (error) {
    console.error('signUp', error);
    throw error;
  }
};
