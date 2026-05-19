import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';

import { APP_STORAGE_KEYS } from '../../core/constants/constants';
import { AppActions } from '../actions/app.actions';

@Injectable()
export class AppEffects {
  private readonly actions$ = inject(Actions);

  readonly persistLanguage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AppActions.setLanguage),
        tap(({ language }) => {
          if (typeof localStorage === 'undefined') {
            return;
          }

          localStorage.setItem(APP_STORAGE_KEYS.language, language);
        }),
      ),
    { dispatch: false },
  );
}
