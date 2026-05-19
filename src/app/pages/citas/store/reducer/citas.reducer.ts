import { createFeature, createReducer, on } from '@ngrx/store';

import { CitasActions } from '../actions/citas.actions';
import { initialCitasState } from '../state/citas.state';

export const citasFeature = createFeature({
  name: 'citas',
  reducer: createReducer(
    initialCitasState,
    on(CitasActions.loadCitas, (state) => ({
      ...state,
      loading: true,
      error: null,
    })),
    on(CitasActions.loadCitasSuccess, (state, { items, loadedAt }) => ({
      ...state,
      items,
      loadedAt,
      loading: false,
      error: null,
    })),
    on(CitasActions.loadCitasFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })),
  ),
});

export const {
  name: citasFeatureKey,
  reducer: citasReducer,
  selectCitasState,
  selectItems,
  selectLoading,
  selectError,
  selectLoadedAt,
} = citasFeature;
