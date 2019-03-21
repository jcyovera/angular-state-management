import { Action } from '@ngrx/store';
import { PersonalInfo } from '../models/personal-info.model';
 
export enum PersonalInfoActionTypes {
  Save = '[Personal Info] Save',
  SaveSuccess = '[Personal Info] Save Success',
  Reset = '[Personal Info] Reset'
}
 
export class Load implements Action {
  readonly type = PersonalInfoActionTypes.Save;
}
 
export class LoadSuccess implements Action {
  readonly type = PersonalInfoActionTypes.SaveSuccess;
  constructor(public payload: PersonalInfo) {}
}
 
export type PersonalInfoActions = Load | LoadSuccess;