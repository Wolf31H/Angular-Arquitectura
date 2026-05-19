import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { InventarioItem } from '../../../../core/models/inventario-item.model';
import { InventarioActions } from '../actions/inventario.actions';
import {
  selectInventarioError,
  selectInventarioItems,
  selectInventarioLoadedAt,
  selectInventarioLoading,
} from '../selectors/inventario.selectors';
import { InventarioState } from '../state/inventario.state';

@Injectable()
export class InventarioFacade {
  private readonly store = inject(Store<{ inventario: InventarioState }>);

  readonly items$: Observable<InventarioItem[]> = this.store.select(selectInventarioItems);
  readonly loading$: Observable<boolean> = this.store.select(selectInventarioLoading);
  readonly error$: Observable<string | null> = this.store.select(selectInventarioError);
  readonly loadedAt$: Observable<string | null> = this.store.select(selectInventarioLoadedAt);

  loadInventario(): void {
    this.store.dispatch(InventarioActions.loadInventario());
  }
}
