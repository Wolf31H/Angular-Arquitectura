import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PACIENTES_FEATURE_KEY } from '../../../../core/constants/selectors.constants';
import { IPacientesState } from '../state/pacientes.state';

export const selectPacientesState = createFeatureSelector<IPacientesState>(
  PACIENTES_FEATURE_KEY,
);

export const selectPacientesData = createSelector(
  selectPacientesState,
  (state) => state?.data,
);

export const selectPacientesItems = createSelector(
  selectPacientesData,
  (data) => data?.data || [],
);

export const selectPacientesMapped = createSelector(selectPacientesItems, (items) =>
  items.map((paciente) => ({
    id: paciente.id,
    nombre: paciente.nombreCompleto,
    documento: paciente.documento,
    estado: paciente.estado,
    ultimaVisita: paciente.ultimaVisita,
  })),
);

export const selectPacientesLoading = createSelector(
  selectPacientesState,
  (state) => state?.loading,
);

export const selectPacientesCompleted = createSelector(
  selectPacientesState,
  (state) => state?.completed,
);

export const selectPacientesError = createSelector(
  selectPacientesState,
  (state) => state?.error,
);

export const selectPacientesErrorMessage = createSelector(
  selectPacientesState,
  (state) => state?.errorMessage,
);
