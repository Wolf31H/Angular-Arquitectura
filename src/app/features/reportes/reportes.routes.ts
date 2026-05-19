import { Routes } from '@angular/router';

export const REPORTES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/reportes-home.page').then((m) => m.ReportesHomePage),
  },
];
