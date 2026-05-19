import { DatePipe, NgClass } from '@angular/common';
import { Component, OnInit, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { CitasFacade } from '../../../pages/citas/store/facade/citas.facade';
import { KpiCardComponent } from '../../../shared/ui/kpi-card/kpi-card.component';
import { PageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';
import { Cita } from '../models/cita.model';

@Component({
  imports: [DatePipe, NgClass, KpiCardComponent, PageHeaderComponent],
  providers: [CitasFacade],
  templateUrl: './citas-home.page.html',
  styleUrl: './citas-home.page.scss',
})
export class CitasHomePage implements OnInit {
  private readonly citasFacade = inject(CitasFacade);

  protected readonly citas = toSignal(this.citasFacade.items$, {
    initialValue: [] as Cita[],
  });

  protected readonly cargando = toSignal(this.citasFacade.loading$, {
    initialValue: false,
  });

  protected readonly error = toSignal(this.citasFacade.error$, {
    initialValue: null,
  });

  protected readonly pendientes = computed(
    () => this.citas().filter((cita) => cita.estado === 'pendiente').length,
  );

  ngOnInit(): void {
    this.citasFacade.loadCitas();
  }
}
