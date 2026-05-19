import { Routes } from '@angular/router';

import { authGuard } from './core/guards/auth.guard';
import { AppShellComponent } from './core/layout/app-shell/app-shell.component';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES),
      },
      {
        path: 'pacientes',
        loadChildren: () =>
          import('./features/pacientes/pacientes.routes').then((m) => m.PACIENTES_ROUTES),
      },
      {
        path: 'historias-clinicas',
        loadChildren: () =>
          import('./features/historias-clinicas/historias-clinicas.routes').then(
            (m) => m.HISTORIAS_CLINICAS_ROUTES,
          ),
      },
      {
        path: 'inventario',
        loadChildren: () =>
          import('./features/inventario/inventario.routes').then((m) => m.INVENTARIO_ROUTES),
      },
      {
        path: 'facturacion-electronica',
        loadChildren: () =>
          import('./features/facturacion-electronica/facturacion-electronica.routes').then(
            (m) => m.FACTURACION_ELECTRONICA_ROUTES,
          ),
      },
      {
        path: 'insumos',
        loadChildren: () =>
          import('./features/insumos/insumos.routes').then((m) => m.INSUMOS_ROUTES),
      },
      {
        path: 'promociones',
        loadChildren: () =>
          import('./features/promociones/promociones.routes').then((m) => m.PROMOCIONES_ROUTES),
      },
      {
        path: 'citas',
        loadChildren: () =>
          import('./features/citas/citas.routes').then((m) => m.CITAS_ROUTES),
      },
      {
        path: 'reportes',
        loadChildren: () =>
          import('./features/reportes/reportes.routes').then((m) => m.REPORTES_ROUTES),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
