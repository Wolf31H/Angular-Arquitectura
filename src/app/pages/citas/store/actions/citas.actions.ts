import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Cita } from '../../../../features/citas/models/cita.model';

export const CitasActions = createActionGroup({
  source: 'Citas',
  events: {
    'Load Citas': emptyProps(),
    'Load Citas Success': props<{ items: Cita[]; loadedAt: string }>(),
    'Load Citas Failure': props<{ error: string }>(),
  },
});
