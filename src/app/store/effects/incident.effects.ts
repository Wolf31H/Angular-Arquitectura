import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, catchError, map, of, switchMap, take } from 'rxjs';

import { APP_MESSAGES } from '../../core/constants/constants';
import { IIncidentModelRes } from '../../core/models/global/incident.model';
import { IncidentService } from '../../core/services/global/incident.service';
import {
  IncidentActionFail,
  IncidentActionLoad,
  IncidentActionSuccess,
} from '../actions/incident.actions';

@Injectable()
export class IncidentEffects {
  private readonly _actions$ = inject(Actions);
  private readonly _service = inject(IncidentService);

  readonly incidentEffects$: Observable<Action> = createEffect(() =>
    this._actions$.pipe(
      ofType(IncidentActionLoad),
      switchMap(({ req }) =>
        this._service.getIncidentService(req).pipe(
          take(1),
          map((res: IIncidentModelRes) => {
            if (res.error) {
              return IncidentActionFail({
                errorMessage: APP_MESSAGES.incidentServiceError,
              });
            }

            if (res.data) {
              return IncidentActionSuccess({ res });
            }

            return IncidentActionFail({
              errorMessage: APP_MESSAGES.incidentEmptyDataError,
            });
          }),
          catchError(() =>
            of(
              IncidentActionFail({
                errorMessage: APP_MESSAGES.incidentServerError,
              }),
            ),
          ),
        ),
      ),
    ),
  );
}
