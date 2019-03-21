import { Action } from '@ngrx/store';
import { BankInfo } from '../models/bank-info.model';

 
export enum BankInfoActionTypes {
  Load = '[Bank Info] Load',
  LoadSuccess = '[Bank Info] Load Success',
  Reset = '[Bank Info] Reset',
}
 
export class Load implements Action {
  readonly type = BankInfoActionTypes.Load;
}
 
export class LoadSuccess implements Action {
  readonly type = BankInfoActionTypes.LoadSuccess;
  constructor(public payload: BankInfo) {}
}

export type BankInfoActions = Load | LoadSuccess ;
