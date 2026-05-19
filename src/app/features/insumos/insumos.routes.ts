import { Routes } from '@angular/router';

export const INSUMOS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/insumos-home.page').then((m) => m.InsumosHomePage),
  },
];
