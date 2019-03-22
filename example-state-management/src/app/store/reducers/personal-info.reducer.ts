import { PersonalInfoActionTypes, PersonalInfoActions } from '../actions/personal-info.actions';
import { initialPersonalInfoState, IPersonalInfoState } from '../state/personal-info.state';

export const personalInfoReducers =
(state = initialPersonalInfoState, action: PersonalInfoActions): IPersonalInfoState => {
  switch(action.type) {
    case (PersonalInfoActionTypes.SaveSuccess): {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
     return state;
  }
}

