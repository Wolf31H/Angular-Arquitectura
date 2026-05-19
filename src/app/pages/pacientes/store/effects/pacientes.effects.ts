import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, catchError, map, of, switchMap, take } from 'rxjs';

import { APP_MESSAGES } from '../../../../core/constants/constants';
import { PacientesService } from '../../../../features/pacientes/services/pacientes.service';
import {
  PacientesActionFail,
  PacientesActionLoad,
  PacientesActionSuccess,
} from '../actions/pacientes.actions';
import { IPacientesModelRes } from '../state/pacientes.state';

@Injectable()
export class PacientesEffects {
  private readonly _actions$ = inject(Actions);
  private readonly _service = inject(PacientesService);

  readonly pacientesEffects$: Observable<Action> = createEffect(() =>
    this._actions$.pipe(
      ofType(PacientesActionLoad),
      switchMap(({ req }) =>
        this._service.getPacientesService(req).pipe(
          take(1),
          map((res: IPacientesModelRes) => {
            if (res.error) {
              return PacientesActionFail({
                errorMessage: APP_MESSAGES.pacientesLoadError,
              });
            }

            if (res.data) {
              return PacientesActionSuccess({ res });
            }

            return PacientesActionFail({
              errorMessage: APP_MESSAGES.pacientesLoadError,
            });
          }),
          catchError(() =>
            of(
              PacientesActionFail({
                errorMessage: APP_MESSAGES.genericHttpError,
              }),
            ),
          ),
        ),
      ),
    ),
  );
}
