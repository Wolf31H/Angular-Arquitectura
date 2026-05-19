import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { InventarioItem } from '../../../../features/inventario/models/inventario-item.model';

export const InventarioActions = createActionGroup({
  source: 'Inventario',
  events: {
    'Load Inventario': emptyProps(),
    'Load Inventario Success': props<{ items: InventarioItem[]; loadedAt: string }>(),
    'Load Inventario Failure': props<{ error: string }>(),
  },
});
