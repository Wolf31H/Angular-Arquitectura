import { Routes } from '@angular/router';

export const INVENTARIO_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/inventario-home.page').then((m) => m.InventarioHomePage),
  },
];
