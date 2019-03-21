import { initialPersonalInfoState, IPersonalInfoState } from '../state/personal-info.state';
import { PersonalInfoActions, PersonalInfoActionTypes } from '../actions/personal-info.actions';

export const personalInfoReducers = (
    state = initialPersonalInfoState,
    action: PersonalInfoActions
  ): IPersonalInfoState => {
    switch (action.type) {
      case PersonalInfoActionTypes.SaveSuccess: {
        return {
          ...state,
          ...action.payload
        };
      }
  
      default:
        return state;
    }
  };