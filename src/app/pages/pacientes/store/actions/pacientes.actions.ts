import { createAction, props } from '@ngrx/store';

import { IPacientesModelReq, IPacientesModelRes } from '../state/pacientes.state';

const enum TypeActionsPacientes {
  LOAD = '[Pacientes / API] Pacientes Load',
  FAIL = '[Pacientes / API] Pacientes Fail',
  SUCCESS = '[Pacientes / API] Pacientes Success',
  RESET = '[Pacientes / API] Pacientes Reset',
}

export const PacientesActionLoad = createAction(
  TypeActionsPacientes.LOAD,
  props<{ req: IPacientesModelReq }>(),
);

export const PacientesActionSuccess = createAction(
  TypeActionsPacientes.SUCCESS,
  props<{ res: IPacientesModelRes }>(),
);

export const PacientesActionFail = createAction(
  TypeActionsPacientes.FAIL,
  props<{ errorMessage: string }>(),
);

export const PacientesActionReset = createAction(TypeActionsPacientes.RESET);
