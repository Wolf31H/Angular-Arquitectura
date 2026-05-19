import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { INVENTARIO_FEATURE_KEY } from '../../../../core/constants/selectors.constants';
import { InventarioItem } from '../../../../core/models/inventario-item.model';
import {
  InventarioActionLoad,
  InventarioActionReset,
} from '../actions/inventario.actions';
import {
  selectInventarioErrorMessage,
  selectInventarioItems,
  selectInventarioLoading,
} from '../selectors/inventario.selectors';
import { IInventarioModelReq, IInventarioState } from '../state/inventario.state';

@Injectable()
export class InventarioFacade {
  private readonly store = inject(Store<{ [INVENTARIO_FEATURE_KEY]: IInventarioState }>);

  readonly items$: Observable<InventarioItem[]> = this.store.select(selectInventarioItems);
  readonly loading$: Observable<boolean> = this.store.select(selectInventarioLoading);
  readonly error$: Observable<string> = this.store.select(selectInventarioErrorMessage);

  loadInventario(req: IInventarioModelReq = {}): void {
    this.store.dispatch(InventarioActionLoad({ req }));
  }

  resetInventario(): void {
    this.store.dispatch(InventarioActionReset());
  }
}
