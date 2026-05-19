import { DatePipe, NgClass } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { KpiCardComponent } from '../../../shared/ui/kpi-card/kpi-card.component';
import { PageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';
import { HistoriasClinicasRepository } from '../data-access/historias-clinicas.repository';
import { HistoriaClinica } from '../models/historia-clinica.model';

@Component({
  imports: [DatePipe, NgClass, KpiCardComponent, PageHeaderComponent],
  templateUrl: './historias-clinicas-home.page.html',
  styleUrl: './historias-clinicas-home.page.scss',
})
export class HistoriasClinicasHomePage {
  private readonly repository = inject(HistoriasClinicasRepository);

  protected readonly historias = toSignal(this.repository.list(), {
    initialValue: [] as HistoriaClinica[],
  });

  protected readonly altoRiesgo = computed(
    () => this.historias().filter((historia) => historia.riesgoPieDiabetico === 'alto').length,
  );
}
