import { createSelector } from '@ngrx/store';

import { selectInventarioState } from '../reducer/inventario.reducer';

export const selectInventarioItems = createSelector(
  selectInventarioState,
  (state) => state.items,
);

export const selectInventarioLoading = createSelector(
  selectInventarioState,
  (state) => state.loading,
);

export const selectInventarioError = createSelector(
  selectInventarioState,
  (state) => state.error,
);

export const selectInventarioLoadedAt = createSelector(
  selectInventarioState,
  (state) => state.loadedAt,
);
