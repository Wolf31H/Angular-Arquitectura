import { InventarioItem } from '../../../../core/models/inventario-item.model';
import { IGlobalState } from '../../../../store/state/global-state.state';

export interface IInventarioModelReq {
  onlyCritical?: boolean;
}

export interface IInventarioModelRes {
  data: InventarioItem[] | null;
  error: boolean;
  message?: string;
}

export interface IInventarioState extends IGlobalState {
  data: IInventarioModelRes | null;
}

export const initInventarioReducer: IInventarioState = {
  data: null,
  loading: false,
  completed: false,
  error: false,
  errorMessage: '',
};
