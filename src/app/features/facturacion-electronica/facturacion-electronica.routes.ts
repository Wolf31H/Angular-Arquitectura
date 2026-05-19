import { Routes } from '@angular/router';

export const FACTURACION_ELECTRONICA_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/facturacion-electronica-home.page').then(
        (m) => m.FacturacionElectronicaHomePage,
      ),
  },
];
