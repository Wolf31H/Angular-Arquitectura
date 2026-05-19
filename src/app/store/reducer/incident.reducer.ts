import { createReducer, on } from '@ngrx/store';

import { INCIDENT_FEATURE_KEY } from '../../core/constants/selectors.constants';
import {
  IncidentActionFail,
  IncidentActionLoad,
  IncidentActionReset,
  IncidentActionSuccess,
} from '../actions/incident.actions';
import { IIncidentState } from '../state/global-state.state';

export const initIncidentReducer: IIncidentState = {
  data: null,
  loading: false,
  completed: false,
  error: false,
  errorMessage: '',
};

export { INCIDENT_FEATURE_KEY };

export const IncidentReducer = createReducer(
  initIncidentReducer,
  on(IncidentActionLoad, (state) => ({
    ...state,
    loading: true,
    completed: false,
    error: false,
    errorMessage: '',
  })),
  on(IncidentActionSuccess, (state, { res }) => ({
    ...state,
    completed: true,
    loading: false,
    error: false,
    data: res,
  })),
  on(IncidentActionFail, (state, { errorMessage }) => ({
    ...state,
    loading: false,
    completed: false,
    error: true,
    errorMessage,
  })),
  on(IncidentActionReset, () => initIncidentReducer),
);
