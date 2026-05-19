import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CITAS_FEATURE_KEY } from '../../../../core/constants/selectors.constants';
import { ICitasState } from '../state/citas.state';

export const selectCitasState = createFeatureSelector<ICitasState>(CITAS_FEATURE_KEY);

export const selectCitasData = createSelector(selectCitasState, (state) => state?.data);

export const selectCitasItems = createSelector(
  selectCitasData,
  (data) => data?.data || [],
);

export const selectCitasLoading = createSelector(
  selectCitasState,
  (state) => state?.loading,
);

export const selectCitasErrorMessage = createSelector(
  selectCitasState,
  (state) => state?.errorMessage,
);
