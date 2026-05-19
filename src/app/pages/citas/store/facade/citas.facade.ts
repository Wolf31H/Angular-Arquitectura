import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CITAS_FEATURE_KEY } from '../../../../core/constants/selectors.constants';
import { Cita } from '../../../../core/models/cita.model';
import { CitasActionLoad, CitasActionReset } from '../actions/citas.actions';
import {
  selectCitasErrorMessage,
  selectCitasItems,
  selectCitasLoading,
} from '../selectors/citas.selectors';
import { ICitasModelReq, ICitasState } from '../state/citas.state';

@Injectable()
export class CitasFacade {
  private readonly store = inject(Store<{ [CITAS_FEATURE_KEY]: ICitasState }>);

  readonly items$: Observable<Cita[]> = this.store.select(selectCitasItems);
  readonly loading$: Observable<boolean> = this.store.select(selectCitasLoading);
  readonly error$: Observable<string> = this.store.select(selectCitasErrorMessage);

  loadCitas(req: ICitasModelReq = {}): void {
    this.store.dispatch(CitasActionLoad({ req }));
  }

  resetCitas(): void {
    this.store.dispatch(CitasActionReset());
  }
}
