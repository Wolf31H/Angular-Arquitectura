import { createFeature, createReducer, on } from '@ngrx/store';

import { PacientesActions } from '../actions/pacientes.actions';
import { initialPacientesState } from '../state/pacientes.state';

export const pacientesFeature = createFeature({
  name: 'pacientes',
  reducer: createReducer(
    initialPacientesState,
    on(PacientesActions.loadPacientes, (state) => ({
      ...state,
      loading: true,
      error: null,
    })),
    on(PacientesActions.loadPacientesSuccess, (state, { items, loadedAt }) => ({
      ...state,
      items,
      loadedAt,
      loading: false,
      error: null,
    })),
    on(PacientesActions.loadPacientesFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })),
  ),
});

export const {
  name: pacientesFeatureKey,
  reducer: pacientesReducer,
  selectPacientesState,
  selectItems,
  selectLoading,
  selectError,
  selectLoadedAt,
} = pacientesFeature;
