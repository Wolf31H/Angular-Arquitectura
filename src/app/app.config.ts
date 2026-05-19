import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { authTokenInterceptor } from './core/interceptors/auth-token.interceptor';
import { httpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { AppEffects } from './store/effects/app.effects';
import { metaReducers } from './store/meta-reducers';
import { rootReducers } from './store/reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
    provideStore(rootReducers, { metaReducers }),
    provideEffects([AppEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
    provideHttpClient(withInterceptors([authTokenInterceptor, httpErrorInterceptor])),
  ],
};
