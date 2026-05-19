import { createFeature, createReducer, on } from '@ngrx/store';

import { InventarioActions } from '../actions/inventario.actions';
import { initialInventarioState } from '../state/inventario.state';

export const inventarioFeature = createFeature({
  name: 'inventario',
  reducer: createReducer(
    initialInventarioState,
    on(InventarioActions.loadInventario, (state) => ({
      ...state,
      loading: true,
      error: null,
    })),
    on(InventarioActions.loadInventarioSuccess, (state, { items, loadedAt }) => ({
      ...state,
      items,
      loadedAt,
      loading: false,
      error: null,
    })),
    on(InventarioActions.loadInventarioFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })),
  ),
});

export const {
  name: inventarioFeatureKey,
  reducer: inventarioReducer,
  selectInventarioState,
  selectItems,
  selectLoading,
  selectError,
  selectLoadedAt,
} = inventarioFeature;
