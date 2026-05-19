import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { APP_MESSAGES } from '../../../../core/constants/constants';
import { CitasService } from '../../../../features/citas/services/citas.service';
import { CitasActions } from '../actions/citas.actions';

@Injectable()
export class CitasEffects {
  private readonly actions$ = inject(Actions);
  private readonly citasService = inject(CitasService);

  readonly loadCitas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CitasActions.loadCitas),
      switchMap(() =>
        this.citasService.list().pipe(
          map((items) =>
            CitasActions.loadCitasSuccess({
              items,
              loadedAt: new Date().toISOString(),
            }),
          ),
          catchError((error: unknown) =>
            of(
              CitasActions.loadCitasFailure({
                error:
                  error instanceof Error
                    ? error.message
                    : APP_MESSAGES.genericHttpError,
              }),
            ),
          ),
        ),
      ),
    ),
  );
}
