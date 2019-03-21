import { State } from "../state/app.state";
import { createSelector } from '@ngrx/store';

const appState = (state: State) => state;

export const selectPersonalInfo = createSelector(
    appState,
    (state: State) => state.personalInfo
  );
