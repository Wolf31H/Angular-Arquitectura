import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppActions } from '../actions/app.actions';
import {
  selectCurrentLanguage,
  selectGlobalError,
  selectHasPendingRequests,
} from '../selectors/app.selectors';
import { AppLanguage } from '../state/app.state';

@Injectable({ providedIn: 'root' })
export class AppFacade {
  private readonly store = inject(Store);

  readonly language$ = this.store.select(selectCurrentLanguage);
  readonly hasPendingRequests$ = this.store.select(selectHasPendingRequests);
  readonly globalError$ = this.store.select(selectGlobalError);

  setLanguage(language: AppLanguage): void {
    this.store.dispatch(AppActions.setLanguage({ language }));
  }

  clearGlobalError(): void {
    this.store.dispatch(AppActions.clearGlobalError());
  }
}
