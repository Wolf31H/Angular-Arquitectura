import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { APP_MESSAGES } from '../../../../core/constants/constants';
import { InventarioRepository } from '../../../../features/inventario/data-access/inventario.repository';
import { InventarioActions } from '../actions/inventario.actions';

@Injectable()
export class InventarioEffects {
  private readonly actions$ = inject(Actions);
  private readonly inventarioRepository = inject(InventarioRepository);

  readonly loadInventario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InventarioActions.loadInventario),
      switchMap(() =>
        this.inventarioRepository.list().pipe(
          map((items) =>
            InventarioActions.loadInventarioSuccess({
              items,
              loadedAt: new Date().toISOString(),
            }),
          ),
          catchError((error: unknown) =>
            of(
              InventarioActions.loadInventarioFailure({
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
