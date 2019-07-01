import * as ProfileActions from './profile.actions';
import { ProfileState } from './profile.config';

export const initialState: ProfileState = {
  profile: null,
};

export function profileReducer(state = initialState, action: ProfileActions.All) {
  switch (action.type) {
    case ProfileActions.SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
}
