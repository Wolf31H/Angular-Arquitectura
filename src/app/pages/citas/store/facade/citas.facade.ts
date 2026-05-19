import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Cita } from '../../../../core/models/cita.model';
import { CitasActions } from '../actions/citas.actions';
import {
  selectCitasError,
  selectCitasItems,
  selectCitasLoadedAt,
  selectCitasLoading,
} from '../selectors/citas.selectors';
import { CitasState } from '../state/citas.state';

@Injectable()
export class CitasFacade {
  private readonly store = inject(Store<{ citas: CitasState }>);

  readonly items$: Observable<Cita[]> = this.store.select(selectCitasItems);
  readonly loading$: Observable<boolean> = this.store.select(selectCitasLoading);
  readonly error$: Observable<string | null> = this.store.select(selectCitasError);
  readonly loadedAt$: Observable<string | null> = this.store.select(selectCitasLoadedAt);

  loadCitas(): void {
    this.store.dispatch(CitasActions.loadCitas());
  }
}
