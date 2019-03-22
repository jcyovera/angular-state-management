import { Action } from '@ngrx/store';

export enum PersonalInfoActionTypes {
  Save = '[Personal Info] Save',
  SaveSuccess = '[Personal Info] Save Success'
}

export class Save implements Action {
  readonly type = PersonalInfoActionTypes.Save;
}

export class SaveSucces implements Action {
  readonly type = PersonalInfoActionTypes.SaveSuccess;
  constructor(public payload: any) {}
}

export type PersonalInfoActions = Save | SaveSucces;


