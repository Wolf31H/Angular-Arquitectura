import { Routes } from '@angular/router';

export const PROMOCIONES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/promociones-home.page').then((m) => m.PromocionesHomePage),
  },
];
