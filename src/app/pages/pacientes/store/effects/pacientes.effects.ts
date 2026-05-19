import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { APP_MESSAGES } from '../../../../core/constants/constants';
import { PacientesRepository } from '../../../../features/pacientes/data-access/pacientes.repository';
import { PacientesActions } from '../actions/pacientes.actions';

@Injectable()
export class PacientesEffects {
  private readonly actions$ = inject(Actions);
  private readonly pacientesRepository = inject(PacientesRepository);

  readonly loadPacientes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PacientesActions.loadPacientes),
      switchMap(() =>
        this.pacientesRepository.list().pipe(
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
