import { Action, ActionReducer, MetaReducer } from '@ngrx/store';

import { APP_STORAGE_KEYS } from '../../core/constants/constants';
import { RootState } from '../state/root.state';

export function hydrationMetaReducer(
  reducer: ActionReducer<RootState>,
): ActionReducer<RootState> {
  return (state: RootState | undefined, action: Action): RootState => {
    let hydratedState = state;

    if (typeof localStorage !== 'undefined' && state === undefined) {
      const storedValue = localStorage.getItem(APP_STORAGE_KEYS.rootState);
      if (storedValue) {
        try {
          hydratedState = JSON.parse(storedValue) as RootState;
        } catch {
          localStorage.removeItem(APP_STORAGE_KEYS.rootState);
        }
      }
    }

    const nextState = reducer(hydratedState, action);

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(APP_STORAGE_KEYS.rootState, JSON.stringify(nextState));
    }

    return nextState;
  };
}

export const metaReducers: MetaReducer<RootState>[] = [hydrationMetaReducer];
