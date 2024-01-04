import type { Gender, UserRoles } from '@/common/const/user.const';

export interface IUser {
  id: string;
  email: string;
  password: string;
  full_name: string;
  major: string;
  gender: Gender;
  phone: string;
  address: string;
  city: string;
  avatar: string;
  languages: string[];
  bio: string;
  skills: string[];
  role: UserRoles;
}
