import type { IUser } from '@/interface/entities/user.interface';
import { axiosClient } from '@/utils/axiosClient';

export const reqUpdateProfile = async (
  params: Partial<IUser>,
  userId: string,
) => {
  const url = `/users/${userId}`;
  return await axiosClient.put(url, params);
};
