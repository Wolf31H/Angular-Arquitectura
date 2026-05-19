import { createAction, props } from '@ngrx/store';

import { ICitasModelReq, ICitasModelRes } from '../state/citas.state';

const enum TypeActionsCitas {
  LOAD = '[Citas / API] Citas Load',
  FAIL = '[Citas / API] Citas Fail',
  SUCCESS = '[Citas / API] Citas Success',
  RESET = '[Citas / API] Citas Reset',
}

export const CitasActionLoad = createAction(
  TypeActionsCitas.LOAD,
  props<{ req: ICitasModelReq }>(),
);

export const CitasActionSuccess = createAction(
  TypeActionsCitas.SUCCESS,
  props<{ res: ICitasModelRes }>(),
);

export const CitasActionFail = createAction(
  TypeActionsCitas.FAIL,
  props<{ errorMessage: string }>(),
);

export const CitasActionReset = createAction(TypeActionsCitas.RESET);
