import { DatePipe, NgClass } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { HistoriaClinica } from '../../../core/models/historia-clinica.model';
import { KpiCardComponent } from '../../../shared/ui/kpi-card/kpi-card.component';
import { PageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';
import { HistoriasClinicasService } from '../services/historias-clinicas.service';

@Component({
  imports: [DatePipe, NgClass, KpiCardComponent, PageHeaderComponent],
  templateUrl: './historias-clinicas-home.page.html',
  styleUrl: './historias-clinicas-home.page.scss',
})
export class HistoriasClinicasHomePage {
  private readonly historiasClinicasService = inject(HistoriasClinicasService);

  protected readonly historias = toSignal(this.historiasClinicasService.list(), {
    initialValue: [] as HistoriaClinica[],
  });

  protected readonly altoRiesgo = computed(
    () => this.historias().filter((historia) => historia.riesgoPieDiabetico === 'alto').length,
  );
}
