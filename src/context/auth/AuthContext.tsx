import { GoogleOAuthProvider } from '@react-oauth/google';
import type { AxiosResponse } from 'axios';
import type { Context, Dispatch, ReactNode } from 'react';
import { createContext, useEffect, useMemo, useReducer } from 'react';

import { reqVerify } from '@/api/auth';
import type { AuthActionType } from '@/context/auth/reducer';
import { initialize, reducer } from '@/context/auth/reducer';
import type { AuthState } from '@/context/auth/type';
import type { IUser } from '@/interface/entities/user.interface';

export interface PayloadAction<T> {
  type: AuthActionType;
  payload: T;
}
export interface AuthContextType extends AuthState {
  dispatch: Dispatch<PayloadAction<AuthState>>;
}
const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};
export const AuthContext: Context<AuthContextType> =
  createContext<AuthContextType>({
    ...initialState,
    dispatch: () => null,
  });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ ...state, dispatch }), [state, dispatch]);
  useEffect(() => {
    (async () => {
      const accessToken: string | null = localStorage.getItem('ACCESS_TOKEN');
      if (!accessToken) {
        return dispatch(
          initialize({
            isAuthenticated: false,
            isInitialized: true,
            user: null,
          }),
        );
      }
      try {
        const res: AxiosResponse = await reqVerify();
        const user: IUser = res.data as IUser;
        return dispatch(
          initialize({ isAuthenticated: true, isInitialized: true, user }),
        );
      } catch (error) {
        return dispatch(
          initialize({
            isAuthenticated: false,
            isInitialized: true,
            user: null,
          }),
        );
      }
    })();
  }, []);
  return (
    <AuthContext.Provider value={value}>
      <GoogleOAuthProvider clientId="255240186373-ml899igj9gtapdopdekh76eka75sr8b6.apps.googleusercontent.com">
        {children}
      </GoogleOAuthProvider>
    </AuthContext.Provider>
  );
};
