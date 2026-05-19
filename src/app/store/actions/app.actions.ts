import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { AppLanguage } from '../state/app.state';

export const AppActions = createActionGroup({
  source: 'App',
  events: {
    'Set Language': props<{ language: AppLanguage }>(),
    'Http Request Started': emptyProps(),
    'Http Request Finished': emptyProps(),
    'Set Global Error': props<{ error: string }>(),
    'Clear Global Error': emptyProps(),
  },
});
