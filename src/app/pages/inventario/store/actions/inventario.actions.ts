import { createAction, props } from '@ngrx/store';

import { IInventarioModelReq, IInventarioModelRes } from '../state/inventario.state';

const enum TypeActionsInventario {
  LOAD = '[Inventario / API] Inventario Load',
  FAIL = '[Inventario / API] Inventario Fail',
  SUCCESS = '[Inventario / API] Inventario Success',
  RESET = '[Inventario / API] Inventario Reset',
}

export const InventarioActionLoad = createAction(
  TypeActionsInventario.LOAD,
  props<{ req: IInventarioModelReq }>(),
);

export const InventarioActionSuccess = createAction(
  TypeActionsInventario.SUCCESS,
  props<{ res: IInventarioModelRes }>(),
);

export const InventarioActionFail = createAction(
  TypeActionsInventario.FAIL,
  props<{ errorMessage: string }>(),
);

export const InventarioActionReset = createAction(TypeActionsInventario.RESET);
