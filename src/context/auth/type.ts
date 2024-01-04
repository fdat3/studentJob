import type { IUser } from '@/interface/entities/user.interface';

export interface AuthState {
  isAuthenticated?: boolean;
  isInitialized?: boolean;
  user: IUser | null;
}
