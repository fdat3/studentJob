import type { IUser } from '@/interface/entities/user.interface';
import { axiosClient } from '@/utils/axiosClient';

export const reqUpdateProfile = async (
  params: Partial<IUser>,
  userId: string,
) => {
  const url = `/users/${userId}`;
  return await axiosClient.put(url, params);
};
export const reqGetAllUser = async () => {
  const url = `/users/findAllUser`;
  return await axiosClient.get(url);
};

export const reqGetUserById = async (
  userId: string,
) => {
  const url = `/users/${userId}`;
  return await axiosClient.get(url);
};