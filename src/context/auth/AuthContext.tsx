import type { Dispatch, ReactNode } from 'react';
import { createContext, useEffect, useMemo, useReducer } from 'react';

import { reqVerify } from '@/api/auth';
import type { AuthActionType } from '@/context/auth/reducer';
import { initialize, reducer } from '@/context/auth/reducer';
import type { AuthState } from '@/context/auth/type';

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
export const AuthContext = createContext<AuthContextType>({
  ...initialState,
  dispatch: () => null,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ ...state, dispatch }), [state, dispatch]);
  useEffect(() => {
    (async () => {
      const accessToken = localStorage.getItem('ACCESS_TOKEN');
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
        const user = await reqVerify();
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
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
