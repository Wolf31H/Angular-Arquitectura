import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { InventarioEffects } from '../../pages/inventario/store/effects/inventario.effects';
import { inventarioFeature } from '../../pages/inventario/store/reducer/inventario.reducer';

export const INVENTARIO_ROUTES: Routes = [
  {
    path: '',
    providers: [provideState(inventarioFeature), provideEffects(InventarioEffects)],
    loadComponent: () =>
      import('./pages/inventario-home.page').then((m) => m.InventarioHomePage),
  },
];
