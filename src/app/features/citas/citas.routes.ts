import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { CitasEffects } from '../../pages/citas/store/effects/citas.effects';
import { CITAS_FEATURE_KEY, CitasReducer } from '../../pages/citas/store/reducer/citas.reducer';

export const CITAS_ROUTES: Routes = [
  {
    path: '',
    providers: [provideState(CITAS_FEATURE_KEY, CitasReducer), provideEffects(CitasEffects)],
    loadComponent: () => import('./pages/citas-home.page').then((m) => m.CitasHomePage),
  },
];
