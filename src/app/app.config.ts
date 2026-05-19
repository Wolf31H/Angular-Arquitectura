import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { authTokenInterceptor } from './core/interceptors/auth-token.interceptor';
import { httpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { AppEffects } from './store/effects/app.effects';
import { IncidentEffects } from './store/effects/incident.effects';
import { metaReducers } from './store/meta-reducers';
import { rootReducers } from './store/reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
    provideStore(rootReducers, { metaReducers }),
    provideEffects([AppEffects, IncidentEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
    provideHttpClient(withInterceptors([authTokenInterceptor, httpErrorInterceptor])),
  ],
};
