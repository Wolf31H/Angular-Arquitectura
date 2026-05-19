import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, finalize, throwError } from 'rxjs';

import { APP_MESSAGES } from '../constants/constants';
import { AppActions } from '../../store/actions/app.actions';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const store = inject(Store);

  store.dispatch(AppActions.httpRequestStarted());

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      store.dispatch(
        AppActions.setGlobalError({
          error: error.message || APP_MESSAGES.genericHttpError,
        }),
      );

      return throwError(() => error);
    }),
    finalize(() => {
      store.dispatch(AppActions.httpRequestFinished());
    }),
  );
};
