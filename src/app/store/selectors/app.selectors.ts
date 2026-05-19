import { createSelector } from '@ngrx/store';

import { selectAppState } from '../reducer/app.reducer';

export const selectCurrentLanguage = createSelector(
  selectAppState,
  (state) => state.language,
);

export const selectHasPendingRequests = createSelector(
  selectAppState,
  (state) => state.pendingRequests > 0,
);

export const selectGlobalError = createSelector(
  selectAppState,
  (state) => state.lastError,
);
