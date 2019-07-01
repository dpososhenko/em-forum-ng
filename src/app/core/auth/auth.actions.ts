import { Action } from '@ngrx/store';
import { LoginPayload } from './auth.config';

export const SET_AUTHENTICATED = '[AUTH] set authenticated';
export const SET_ADMIN = '[AUTH] set administration';
export const LOGIN = '[AUTH] login';

export class SetAuthenticated implements Action {
  readonly type = SET_AUTHENTICATED;
  constructor(public payload: boolean) {}
}

export class SetAdministration implements Action {
  readonly type = SET_ADMIN;
  constructor(public payload: boolean) {}
}

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: LoginPayload) {}
}

export type All = SetAuthenticated
  | Login
  | SetAdministration;

