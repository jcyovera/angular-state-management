import { Action } from '@ngrx/store';

export enum BankInfoActionTypes {
  Save = '[Bank Info] Save',
  SaveSuccess = '[Bank Info] Save Success'
}

export class Save implements Action {
  readonly type = BankInfoActionTypes.Save;
}

export class SaveSucces implements Action {
  readonly type = BankInfoActionTypes.SaveSuccess;
  constructor(public payload: any) {}
}

export type BankInfoActions = Save | SaveSucces;


