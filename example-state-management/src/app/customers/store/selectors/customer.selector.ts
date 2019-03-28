import { ICustomerState } from './../state/customer.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectFeature = createFeatureSelector<ICustomerState>('customers');

export const selectFeatureCustomer = createSelector(
  selectFeature, (state: ICustomerState) => state
);

export const selectAllCustomer = createSelector(
  selectFeature, (state: ICustomerState) => state.allCustomers
);
