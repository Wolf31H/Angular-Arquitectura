import { createReducer, on } from '@ngrx/store';

import { CITAS_FEATURE_KEY } from '../../../../core/constants/selectors.constants';
import {
  CitasActionFail,
  CitasActionLoad,
  CitasActionReset,
  CitasActionSuccess,
} from '../actions/citas.actions';
import { ICitasState, initCitasReducer } from '../state/citas.state';

export { CITAS_FEATURE_KEY };

export const CitasReducer = createReducer(
  initCitasReducer,
  on(CitasActionLoad, (state): ICitasState => ({
    ...state,
    loading: true,
    completed: false,
    error: false,
    errorMessage: '',
  })),
  on(CitasActionSuccess, (state, { res }): ICitasState => ({
    ...state,
    completed: true,
    loading: false,
    error: false,
    data: res,
  })),
  on(CitasActionFail, (state, { errorMessage }): ICitasState => ({
    ...state,
    loading: false,
    completed: false,
    error: true,
    errorMessage,
  })),
  on(CitasActionReset, () => initCitasReducer),
);
