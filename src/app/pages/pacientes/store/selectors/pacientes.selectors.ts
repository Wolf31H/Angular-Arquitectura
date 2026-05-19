import { createSelector } from '@ngrx/store';

import { selectPacientesState } from '../reducer/pacientes.reducer';

export const selectPacientesItems = createSelector(
  selectPacientesState,
  (state) => state.items,
);

export const selectPacientesLoading = createSelector(
  selectPacientesState,
  (state) => state.loading,
);

export const selectPacientesError = createSelector(
  selectPacientesState,
  (state) => state.error,
);

export const selectPacientesLoadedAt = createSelector(
  selectPacientesState,
  (state) => state.loadedAt,
);
