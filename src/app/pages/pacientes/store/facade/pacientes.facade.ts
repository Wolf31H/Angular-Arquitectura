import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PACIENTES_FEATURE_KEY } from '../../../../core/constants/selectors.constants';
import { Paciente } from '../../../../core/models/paciente.model';
import {
  PacientesActionLoad,
  PacientesActionReset,
} from '../actions/pacientes.actions';
import {
  selectPacientesErrorMessage,
  selectPacientesItems,
  selectPacientesLoading,
} from '../selectors/pacientes.selectors';
import { IPacientesModelReq, IPacientesState } from '../state/pacientes.state';

@Injectable()
export class PacientesFacade {
  private readonly store = inject(Store<{ [PACIENTES_FEATURE_KEY]: IPacientesState }>);

  readonly pacientes$: Observable<Paciente[]> = this.store.select(selectPacientesItems);
  readonly loading$: Observable<boolean> = this.store.select(selectPacientesLoading);
  readonly error$: Observable<string> = this.store.select(selectPacientesErrorMessage);

  loadPacientes(req: IPacientesModelReq = {}): void {
    this.store.dispatch(PacientesActionLoad({ req }));
  }

  resetPacientes(): void {
    this.store.dispatch(PacientesActionReset());
  }
}
