import { Action } from '@ngrx/store';

export enum CustomerActionTypes {
  Load = '[Customer] Load',
  LoadSucces = '[Customer] LoadSucces',
  Error = '[Customer] Error'
}

export class Load implements Action {
  readonly type = CustomerActionTypes.Load;
}

export class LoadSucces implements Action {
  readonly type = CustomerActionTypes.LoadSucces;
  constructor(public payload: any) {}
}
export class Error implements Action {
  readonly type = CustomerActionTypes.Error;
  constructor(public payload: any) {}
}

export type CustomerActions = Load | LoadSucces | Error;


