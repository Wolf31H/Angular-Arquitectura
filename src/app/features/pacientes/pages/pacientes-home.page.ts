import { DatePipe, NgClass } from '@angular/common';
import { Component, OnInit, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { PacientesFacade } from '../../../pages/pacientes/store/facade/pacientes.facade';
import { KpiCardComponent } from '../../../shared/ui/kpi-card/kpi-card.component';
import { PageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';
import { Paciente } from '../models/paciente.model';

@Component({
  imports: [DatePipe, NgClass, KpiCardComponent, PageHeaderComponent],
  providers: [PacientesFacade],
  templateUrl: './pacientes-home.page.html',
  styleUrl: './pacientes-home.page.scss',
})
export class PacientesHomePage implements OnInit {
  private readonly pacientesFacade = inject(PacientesFacade);

  protected readonly pacientes = toSignal(this.pacientesFacade.pacientes$, {
    initialValue: [] as Paciente[],
  });

  protected readonly cargando = toSignal(this.pacientesFacade.loading$, {
    initialValue: false,
  });

  protected readonly error = toSignal(this.pacientesFacade.error$, {
    initialValue: null,
  });

  protected readonly activos = computed(
    () => this.pacientes().filter((paciente) => paciente.estado === 'activo').length,
  );

  protected readonly enSeguimiento = computed(
    () => this.pacientes().filter((paciente) => paciente.estado === 'seguimiento').length,
  );

  ngOnInit(): void {
    this.pacientesFacade.loadPacientes();
  }
}
