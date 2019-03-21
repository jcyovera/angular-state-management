import { initialBankInfoState, IBankInfoState } from '../state/bank-info.state';
import { BankInfoActions, BankInfoActionTypes } from '../actions/bank-info.actions';


export const bankInfoReducers = (
    state = initialBankInfoState,
    action: BankInfoActions
  ): IBankInfoState => {
    switch (action.type) {
      case BankInfoActionTypes.LoadSuccess: {
        return {
          ...state,
          ...action.payload
        };
      }
  
      default:
        return state;
    }
  };