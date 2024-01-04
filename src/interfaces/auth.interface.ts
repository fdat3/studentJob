import { Request } from 'express';
import { IUser } from '@/interfaces';
import { Role } from '@/common/constants';

export interface DataStoredInToken {
  id: string;
  role?: Role;
}

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface RequestWithUser extends Request {
  user: IUser;
}
