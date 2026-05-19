import { createReducer, on } from '@ngrx/store';

import { PACIENTES_FEATURE_KEY } from '../../../../core/constants/selectors.constants';
import {
  PacientesActionFail,
  PacientesActionLoad,
  PacientesActionReset,
  PacientesActionSuccess,
} from '../actions/pacientes.actions';
import { IPacientesState, initPacientesReducer } from '../state/pacientes.state';

export { PACIENTES_FEATURE_KEY };

export const PacientesReducer = createReducer(
  initPacientesReducer,
  on(PacientesActionLoad, (state): IPacientesState => ({
    ...state,
    loading: true,
    completed: false,
    error: false,
    errorMessage: '',
  })),
  on(PacientesActionSuccess, (state, { res }): IPacientesState => ({
    ...state,
    completed: true,
    loading: false,
    error: false,
    data: res,
  })),
  on(PacientesActionFail, (state, { errorMessage }): IPacientesState => ({
    ...state,
    loading: false,
    completed: false,
    error: true,
    errorMessage,
  })),
  on(PacientesActionReset, () => initPacientesReducer),
);
