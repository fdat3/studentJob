import type { AxiosResponse } from 'axios';
import { enqueueSnackbar } from 'notistack';

import { reqUpdateProfile } from '@/api/user';
import type { IUser } from '@/interface/entities/user.interface';

export const handleUpdateProfile = async (
  params: Partial<IUser>,
): Promise<IUser> => {
  try {
    const userInfo = localStorage.getItem('userInfo');
    const userId = userInfo ? JSON.parse(userInfo).id : null;
    if (!userId) {
      throw new Error('User not found');
    }
    const res: AxiosResponse = await reqUpdateProfile(params, userId);
    const { data: user } = res.data;

    if (res.status === 200 && user) {
      localStorage.setItem('userInfo', JSON.stringify(user));
      return user as IUser;
    }
    throw new Error('Update profile failed');
  } catch (error: any) {
    console.log('ERROR ==>', error);
    enqueueSnackbar(error.message, { variant: 'error' });
    throw new Error(error.message);
  }
};
