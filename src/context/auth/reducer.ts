import type { PayloadAction } from '@/context/auth/AuthContext';
import type { AuthState } from '@/context/auth/type';

export enum AuthActionType {
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
  INITIALIZE = 'INITIALIZE',
}
export interface ReducerHandler {
  INITIALIZE(state: AuthState, action: PayloadAction<AuthState>): AuthState;
  SIGN_IN(state: AuthState, action: PayloadAction<AuthState>): AuthState;
  SIGN_OUT(state: AuthState): AuthState;
}
const reducerHandlers: ReducerHandler = {
  INITIALIZE(state: AuthState, action: PayloadAction<AuthState>): AuthState {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  SIGN_IN(state: AuthState, action: PayloadAction<AuthState>): AuthState {
    const { user } = action.payload;
    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  SIGN_OUT(state: AuthState): AuthState {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
    };
  },
};
export function reducer(
  state: AuthState,
  action: PayloadAction<AuthState>,
): AuthState {
  if (!reducerHandlers[action.type]) {
    return state;
  }
  return reducerHandlers[action.type](state, action);
}

// =========ACTIONS=========
export function initialize(payload: AuthState): PayloadAction<AuthState> {
  return {
    type: AuthActionType.INITIALIZE,
    payload,
  };
}
export function signIn(payload: AuthState): PayloadAction<AuthState> {
  return {
    type: AuthActionType.SIGN_IN,
    payload,
  };
}
export function signOut(): PayloadAction<AuthState> {
  localStorage.removeItem('ACCESS_TOKEN');
  return {
    type: AuthActionType.SIGN_OUT,
    payload: { user: null, isAuthenticated: false, isInitialized: false },
  };
}
