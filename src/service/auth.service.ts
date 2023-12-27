import type { AxiosResponse } from 'axios';

import { signIn, signUp } from '@/api/auth.api';

export const handleSignIn = async (params: SignInData) => {
  const res: AxiosResponse = await signIn(params);
};
