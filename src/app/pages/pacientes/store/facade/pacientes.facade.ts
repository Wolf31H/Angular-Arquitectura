import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Paciente } from '../../../../features/pacientes/models/paciente.model';
import { PacientesActions } from '../actions/pacientes.actions';
import {
  selectPacientesError,
  selectPacientesItems,
  selectPacientesLoadedAt,
  selectPacientesLoading,
} from '../selectors/pacientes.selectors';
import { PacientesState } from '../state/pacientes.state';

@Injectable()
export class PacientesFacade {
  private readonly store = inject(Store<{ pacientes: PacientesState }>);

  readonly pacientes$: Observable<Paciente[]> = this.store.select(selectPacientesItems);
  readonly loading$: Observable<boolean> = this.store.select(selectPacientesLoading);
  readonly error$: Observable<string | null> = this.store.select(selectPacientesError);
  readonly loadedAt$: Observable<string | null> = this.store.select(selectPacientesLoadedAt);

  loadPacientes(): void {
    this.store.dispatch(PacientesActions.loadPacientes());
  }
}
