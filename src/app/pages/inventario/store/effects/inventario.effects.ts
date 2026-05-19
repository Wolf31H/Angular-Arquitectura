import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, catchError, map, of, switchMap, take } from 'rxjs';

import { APP_MESSAGES } from '../../../../core/constants/constants';
import { InventarioService } from '../../../../features/inventario/services/inventario.service';
import {
  InventarioActionFail,
  InventarioActionLoad,
  InventarioActionSuccess,
} from '../actions/inventario.actions';
import { IInventarioModelRes } from '../state/inventario.state';

@Injectable()
export class InventarioEffects {
  private readonly _actions$ = inject(Actions);
  private readonly _service = inject(InventarioService);

  readonly inventarioEffects$: Observable<Action> = createEffect(() =>
    this._actions$.pipe(
      ofType(InventarioActionLoad),
      switchMap(({ req }) =>
        this._service.getInventarioService(req).pipe(
          take(1),
          map((res: IInventarioModelRes) => {
            if (res.error) {
              return InventarioActionFail({
                errorMessage: APP_MESSAGES.genericHttpError,
              });
            }

            if (res.data) {
              return InventarioActionSuccess({ res });
            }

            return InventarioActionFail({
              errorMessage: APP_MESSAGES.genericHttpError,
            });
          }),
          catchError(() =>
            of(
              InventarioActionFail({
                errorMessage: APP_MESSAGES.genericHttpError,
              }),
            ),
          ),
        ),
      ),
    ),
  );
}
