import { ActionReducerMap } from '@ngrx/store';

import { RootState } from '../state/root.state';
import { appFeatureKey, appReducer } from './app.reducer';

export const rootReducers: ActionReducerMap<RootState> = {
  [appFeatureKey]: appReducer,
};
