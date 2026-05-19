import { createFeatureSelector, createSelector } from '@ngrx/store';

import { INVENTARIO_FEATURE_KEY } from '../../../../core/constants/selectors.constants';
import { IInventarioState } from '../state/inventario.state';

export const selectInventarioState = createFeatureSelector<IInventarioState>(
  INVENTARIO_FEATURE_KEY,
);

export const selectInventarioData = createSelector(
  selectInventarioState,
  (state) => state?.data,
);

export const selectInventarioItems = createSelector(
  selectInventarioData,
  (data) => data?.data || [],
);

export const selectInventarioLoading = createSelector(
  selectInventarioState,
  (state) => state?.loading,
);

export const selectInventarioErrorMessage = createSelector(
  selectInventarioState,
  (state) => state?.errorMessage,
);
