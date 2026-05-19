import { Routes } from '@angular/router';

export const HISTORIAS_CLINICAS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/historias-clinicas-home.page').then(
        (m) => m.HistoriasClinicasHomePage,
      ),
  },
];
