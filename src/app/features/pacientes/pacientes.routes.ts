import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { Routes } from '@angular/router';

import { PacientesEffects } from '../../pages/pacientes/store/effects/pacientes.effects';
import {
  PACIENTES_FEATURE_KEY,
  PacientesReducer,
} from '../../pages/pacientes/store/reducer/pacientes.reducer';

export const PACIENTES_ROUTES: Routes = [
  {
    path: '',
    providers: [provideState(PACIENTES_FEATURE_KEY, PacientesReducer), provideEffects(PacientesEffects)],
    loadComponent: () =>
      import('./pages/pacientes-home.page').then((m) => m.PacientesHomePage),
  },
];
