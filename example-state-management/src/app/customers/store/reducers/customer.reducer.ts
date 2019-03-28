import { initialCustomerState, ICustomerState } from '../state/customer.state';
import { CustomerActions, CustomerActionTypes } from '../actions/customer.actions';

export const customerReducers =
(state = initialCustomerState, action: CustomerActions): ICustomerState => {
  switch(action.type) {
    case (CustomerActionTypes.LoadSucces): {
      return {
        ...state,
        allCustomers: action.payload
      };
    }
    case (CustomerActionTypes.Error): {
      return {
        ...state,
        error: action.payload
      };
    }
    default:
     return state;
  }
}

