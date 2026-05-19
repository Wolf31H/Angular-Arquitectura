import { createFeature, createReducer, on } from '@ngrx/store';

import { AppActions } from '../actions/app.actions';
import { initialAppState } from '../state/app.state';

export const appFeature = createFeature({
  name: 'app',
  reducer: createReducer(
    initialAppState,
    on(AppActions.setLanguage, (state, { language }) => ({
      ...state,
      language,
    })),
    on(AppActions.httpRequestStarted, (state) => ({
      ...state,
      pendingRequests: state.pendingRequests + 1,
    })),
    on(AppActions.httpRequestFinished, (state) => ({
      ...state,
      pendingRequests: Math.max(0, state.pendingRequests - 1),
    })),
    on(AppActions.setGlobalError, (state, { error }) => ({
      ...state,
      lastError: error,
    })),
    on(AppActions.clearGlobalError, (state) => ({
      ...state,
      lastError: null,
    })),
  ),
});

export const {
  name: appFeatureKey,
  reducer: appReducer,
  selectAppState,
  selectLanguage,
  selectPendingRequests,
  selectLastError,
} = appFeature;
