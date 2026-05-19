import { createAction, props } from '@ngrx/store';

import { IIncidentModelReq, IIncidentModelRes } from '../../core/models/global/incident.model';

const enum TypeActionsIncident {
  LOAD = '[Incident / API] Incident Load',
  FAIL = '[Incident / API] Incident Fail',
  SUCCESS = '[Incident / API] Incident Success',
  RESET = '[Incident / API] Incident Reset',
}

export const IncidentActionLoad = createAction(
  TypeActionsIncident.LOAD,
  props<{ req: IIncidentModelReq }>(),
);

export const IncidentActionSuccess = createAction(
  TypeActionsIncident.SUCCESS,
  props<{ res: IIncidentModelRes }>(),
);

export const IncidentActionFail = createAction(
  TypeActionsIncident.FAIL,
  props<{ errorMessage: string }>(),
);

export const IncidentActionReset = createAction(TypeActionsIncident.RESET);
