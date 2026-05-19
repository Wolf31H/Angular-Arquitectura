import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Paciente } from '../../../../features/pacientes/models/paciente.model';

export const PacientesActions = createActionGroup({
  source: 'Pacientes',
  events: {
    'Load Pacientes': emptyProps(),
    'Load Pacientes Success': props<{ items: Paciente[]; loadedAt: string }>(),
    'Load Pacientes Failure': props<{ error: string }>(),
  },
});
