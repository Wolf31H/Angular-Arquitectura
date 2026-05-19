export type AppLanguage = 'es' | 'en';

export interface AppState {
  language: AppLanguage;
  pendingRequests: number;
  lastError: string | null;
}

export const initialAppState: AppState = {
  language: 'es',
  pendingRequests: 0,
  lastError: null,
};
