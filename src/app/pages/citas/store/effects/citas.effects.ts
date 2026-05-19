import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, catchError, map, of, switchMap, take } from 'rxjs';

import { APP_MESSAGES } from '../../../../core/constants/constants';
import { CitasService } from '../../../../features/citas/services/citas.service';
import {
  CitasActionFail,
  CitasActionLoad,
  CitasActionSuccess,
} from '../actions/citas.actions';
import { ICitasModelRes } from '../state/citas.state';

@Injectable()
export class CitasEffects {
  private readonly _actions$ = inject(Actions);
  private readonly _service = inject(CitasService);

  readonly citasEffects$: Observable<Action> = createEffect(() =>
    this._actions$.pipe(
      ofType(CitasActionLoad),
      switchMap(({ req }) =>
        this._service.getCitasService(req).pipe(
          take(1),
          map((res: ICitasModelRes) => {
            if (res.error) {
              return CitasActionFail({
                errorMessage: APP_MESSAGES.genericHttpError,
              });
            }

            if (res.data) {
              return CitasActionSuccess({ res });
            }

            return CitasActionFail({
              errorMessage: APP_MESSAGES.genericHttpError,
            });
          }),
          catchError(() =>
            of(
              CitasActionFail({
                errorMessage: APP_MESSAGES.genericHttpError,
              }),
            ),
          ),
        ),
      ),
    ),
  );
}
