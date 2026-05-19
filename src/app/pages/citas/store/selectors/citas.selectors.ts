import { createSelector } from '@ngrx/store';

import { selectCitasState } from '../reducer/citas.reducer';

export const selectCitasItems = createSelector(selectCitasState, (state) => state.items);

export const selectCitasLoading = createSelector(selectCitasState, (state) => state.loading);

export const selectCitasError = createSelector(selectCitasState, (state) => state.error);

export const selectCitasLoadedAt = createSelector(selectCitasState, (state) => state.loadedAt);
