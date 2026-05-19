import { DatePipe, NgClass } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { KpiCardComponent } from '../../../shared/ui/kpi-card/kpi-card.component';
import { PageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';
import { CitasRepository } from '../data-access/citas.repository';
import { Cita } from '../models/cita.model';

@Component({
  imports: [DatePipe, NgClass, KpiCardComponent, PageHeaderComponent],
  templateUrl: './citas-home.page.html',
  styleUrl: './citas-home.page.scss',
})
export class CitasHomePage {
  private readonly repository = inject(CitasRepository);

  protected readonly citas = toSignal(this.repository.list(), {
    initialValue: [] as Cita[],
  });

  protected readonly pendientes = computed(
    () => this.citas().filter((cita) => cita.estado === 'pendiente').length,
  );
}
