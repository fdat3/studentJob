import type { AxiosResponse } from 'axios';

import { reqSignIn } from '@/api/auth';
import { reqGetAllUser, reqGetUserById, reqUpdateProfile } from '@/api/user';
import type { IUser } from '@/interface/entities/user.interface';
import { AuthDto } from '@/service/auth.service';

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
    }
    return user;
  } catch (error) {
    console.error('ERROR ==>', error);
    throw error;
  }
};

export const handleGetAllUser = async () => {
  try {
    const res: AxiosResponse = await reqGetAllUser();
    return res;
  } catch (error) {
    console.error('ERROR ==>', error);
    throw error;
  }
};

export const handleGetUserById = async (params: any) => {
  try {
    const res: AxiosResponse = await reqGetUserById(params);
    return res?.data;
  } catch (error) {
    console.error('ERROR ==>', error);
    throw error;
  }
};

