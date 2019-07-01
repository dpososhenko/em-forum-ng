import * as AuthActions from './auth.actions';
import { AuthState } from './auth.config';

export const initialState: AuthState = {
  authenticated: false,
  admin: false,
};

export function authReducer(state = initialState, action: AuthActions.All) {
  switch (action.type) {
    case AuthActions.SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: action.payload,
      };

    case AuthActions.SET_ADMIN:
      return {
        ...state,
        admin: action.payload,
      };

    default:
      return state;
  }
}
