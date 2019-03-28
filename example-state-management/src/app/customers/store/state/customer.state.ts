import { ICustomer } from '../models/customer.model';

export interface ICustomerState{
  allCustomers: ICustomer[];
  currentCustomerId: number;
  error: any;
}

export const initialCustomerState: ICustomerState = {
  allCustomers: [],
  currentCustomerId: 0,
  error: null
}

