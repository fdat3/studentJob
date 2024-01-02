import type { AxiosResponse } from 'axios';

import { reqSignIn, reqSignUp } from '@/api/auth';

export interface AuthDto {
  accessToken: string;
  user: any;
}
export const handleSignIn = async (params: SignInData): Promise<AuthDto> => {
  try {
    const res: AxiosResponse = await reqSignIn(params);
    const { data: user, token: accessToken } = res.data;
    console.log('RES ==> ', res.data);

    if (res.status === 200 && user) {
      console.log('STATUS 200');
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
    console.info('signUp', res);
    return res;
  } catch (error) {
    console.error('signUp', error);
    throw error;
  }
};
