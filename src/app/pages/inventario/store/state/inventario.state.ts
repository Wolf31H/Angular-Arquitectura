import { InventarioItem } from '../../../../core/models/inventario-item.model';

export interface InventarioState {
  items: InventarioItem[];
  loading: boolean;
  error: string | null;
  loadedAt: string | null;
}

export const initialInventarioState: InventarioState = {
  items: [],
  loading: false,
  error: null,
  loadedAt: null,
};
