import { IBankInfoState } from './../state/bank-info.state';
import { BankInfoActions, BankInfoActionTypes } from '../actions/bank-info.actions';
import { initialBankInfoState } from '../state/bank-info.state';

export const bankInfoReducers =
(state = initialBankInfoState, action: BankInfoActions): IBankInfoState => {
    switch (action.type){
      case BankInfoActionTypes.SaveSuccess : {
        return {
          ...state,
          ...action.payload
        };
      }
      default:
       return state;
    }
};
