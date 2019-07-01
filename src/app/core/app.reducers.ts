import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app-state.interface';
import { complexReducer } from './complex/complex.reducers';
import { authReducer } from './auth/auth.reducers';
import { profileReducer } from './profile/profile.reducers';

export const appReducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  profile: profileReducer,
  complex: complexReducer,
};
