import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.config';

export const getAuthState = createFeatureSelector<AuthState>('auth');

export const getAdmin = createSelector(getAuthState, state => state.admin);
export const getAuthenticated = createSelector(getAuthState, state => state.authenticated);
