import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { APP_MESSAGES } from '../../../../core/constants/constants';
import { PacientesService } from '../../../../features/pacientes/services/pacientes.service';
import { PacientesActions } from '../actions/pacientes.actions';

@Injectable()
export class PacientesEffects {
  private readonly actions$ = inject(Actions);
  private readonly pacientesService = inject(PacientesService);

  readonly loadPacientes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PacientesActions.loadPacientes),
      switchMap(() =>
        this.pacientesService.list().pipe(
          map((items) =>
            PacientesActions.loadPacientesSuccess({
              items,
              loadedAt: new Date().toISOString(),
            }),
          ),
          catchError((error: unknown) =>
            of(
              PacientesActions.loadPacientesFailure({
                error:
                  error instanceof Error
                    ? error.message
                    : APP_MESSAGES.pacientesLoadError,
              }),
            ),
          ),
        ),
      ),
    ),
  );
}
