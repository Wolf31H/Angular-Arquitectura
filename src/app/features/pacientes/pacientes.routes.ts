import { Routes } from '@angular/router';

export const PACIENTES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/pacientes-home.page').then((m) => m.PacientesHomePage),
  },
];
