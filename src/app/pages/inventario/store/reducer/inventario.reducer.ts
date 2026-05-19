import { createReducer, on } from '@ngrx/store';

import { INVENTARIO_FEATURE_KEY } from '../../../../core/constants/selectors.constants';
import {
  InventarioActionFail,
  InventarioActionLoad,
  InventarioActionReset,
  InventarioActionSuccess,
} from '../actions/inventario.actions';
import { IInventarioState, initInventarioReducer } from '../state/inventario.state';

export { INVENTARIO_FEATURE_KEY };

export const InventarioReducer = createReducer(
  initInventarioReducer,
  on(InventarioActionLoad, (state): IInventarioState => ({
    ...state,
    loading: true,
    completed: false,
    error: false,
    errorMessage: '',
  })),
  on(InventarioActionSuccess, (state, { res }): IInventarioState => ({
    ...state,
    completed: true,
    loading: false,
    error: false,
    data: res,
  })),
  on(InventarioActionFail, (state, { errorMessage }): IInventarioState => ({
    ...state,
    loading: false,
    completed: false,
    error: true,
    errorMessage,
  })),
  on(InventarioActionReset, () => initInventarioReducer),
);
