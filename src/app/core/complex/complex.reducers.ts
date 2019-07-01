import { ComplexState, ComplexTypes } from './complex.config';
import * as ComplexActions from './complex.actions';

export const initialState: ComplexState = {
  complex: ComplexTypes.Evromisto
};

export function complexReducer(state = initialState, action: ComplexActions.All) {
  switch (action.type) {
    case ComplexActions.SET_DEFAULT_COMPLEX:
      return {
        ...state,
        complex: ComplexTypes.All,
      };

    case ComplexActions.CHANGE_COMPLEX:
      return {
        ...state,
        complex: action.payload,
      };

    default:
      return state;
  }
}
