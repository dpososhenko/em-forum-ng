import { Action } from '@ngrx/store';
import { ComplexTypes } from './complex.config';

export const SET_DEFAULT_COMPLEX = '[Complex] set default complex';
export const CHANGE_COMPLEX = '[Complex] change complex';

export class SetDefaultComplex implements Action {
  readonly type = SET_DEFAULT_COMPLEX;
  constructor() {}
}

export class ChangeComplex implements Action {
  readonly type = CHANGE_COMPLEX;
  constructor(public payload: ComplexTypes) {}
}

export type All = SetDefaultComplex | ChangeComplex;
