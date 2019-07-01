import { ComplexState } from './complex/complex.config';
import { AuthState } from './auth/auth.config';
import { ProfileState } from './profile/profile.config';

export interface AppState {
  complex: ComplexState;
  auth: AuthState;
  profile: ProfileState;
}
