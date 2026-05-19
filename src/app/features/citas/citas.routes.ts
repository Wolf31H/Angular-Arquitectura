import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { CitasEffects } from '../../pages/citas/store/effects/citas.effects';
import { citasFeature } from '../../pages/citas/store/reducer/citas.reducer';

export const CITAS_ROUTES: Routes = [
  {
    path: '',
    providers: [provideState(citasFeature), provideEffects(CitasEffects)],
    loadComponent: () => import('./pages/citas-home.page').then((m) => m.CitasHomePage),
  },
];
