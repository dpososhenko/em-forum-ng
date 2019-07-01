import { Action } from '@ngrx/store';
import { Profile } from './profile.config';

export const SET_PROFILE = '[PROFILE] set user profile';

export class SetProfile implements Action {
  readonly type = SET_PROFILE;
  constructor(public payload: Profile) {}
}

export type All = SetProfile;

