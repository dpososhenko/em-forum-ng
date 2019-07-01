import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ComplexState } from './complex.config';

export const getComplexState = createFeatureSelector<ComplexState>('complex');

export const getComplex = createSelector(getComplexState, state => state.complex);
