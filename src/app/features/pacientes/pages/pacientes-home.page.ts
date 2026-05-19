import { DatePipe, NgClass } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { KpiCardComponent } from '../../../shared/ui/kpi-card/kpi-card.component';
import { PageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';
import { PacientesRepository } from '../data-access/pacientes.repository';
import { Paciente } from '../models/paciente.model';

@Component({
  imports: [DatePipe, NgClass, KpiCardComponent, PageHeaderComponent],
  templateUrl: './pacientes-home.page.html',
  styleUrl: './pacientes-home.page.scss',
})
export class PacientesHomePage {
  private readonly pacientesRepository = inject(PacientesRepository);

  protected readonly pacientes = toSignal(this.pacientesRepository.list(), {
    initialValue: [] as Paciente[],
  });

  protected readonly activos = computed(
    () => this.pacientes().filter((paciente) => paciente.estado === 'activo').length,
  );

  protected readonly enSeguimiento = computed(
    () => this.pacientes().filter((paciente) => paciente.estado === 'seguimiento').length,
  );
}
