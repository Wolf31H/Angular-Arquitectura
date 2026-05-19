import { Routes } from '@angular/router';

export const CITAS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/citas-home.page').then((m) => m.CitasHomePage),
  },
];
