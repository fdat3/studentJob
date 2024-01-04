import { Gender, Role } from '@/common/constants';

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
  role: Role;
}
