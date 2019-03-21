import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { State } from '../state/app.state';
import { personalInfoReducers } from './personal-info.reducer';
import { bankInfoReducers } from './bank-info.reducer';



export const reducers: ActionReducerMap<State> = {
  personalInfo: personalInfoReducers,
  bankInfo: bankInfoReducers
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
