import { State } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const appstate = (state: State) => state;

export const selectPersonalInfo = createSelector(
  appstate,
  (state: State) => state.personalInfo
);

