import { ActionReducerMap } from '@ngrx/store';

import { RootState } from '../state/root.state';
import { appFeatureKey, appReducer } from './app.reducer';
import { INCIDENT_FEATURE_KEY, IncidentReducer } from './incident.reducer';

export const rootReducers: ActionReducerMap<RootState> = {
  [appFeatureKey]: appReducer,
  [INCIDENT_FEATURE_KEY]: IncidentReducer,
};
