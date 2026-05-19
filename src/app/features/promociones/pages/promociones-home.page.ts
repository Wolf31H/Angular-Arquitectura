import { DatePipe, NgClass } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { KpiCardComponent } from '../../../shared/ui/kpi-card/kpi-card.component';
import { PageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';
import { PromocionesRepository } from '../data-access/promociones.repository';
import { Promocion } from '../models/promocion.model';

@Component({
  imports: [DatePipe, NgClass, KpiCardComponent, PageHeaderComponent],
  templateUrl: './promociones-home.page.html',
  styleUrl: './promociones-home.page.scss',
})
export class PromocionesHomePage {
  private readonly repository = inject(PromocionesRepository);

  protected readonly promociones = toSignal(this.repository.list(), {
    initialValue: [] as Promocion[],
  });

  protected readonly activas = computed(
    () => this.promociones().filter((promocion) => promocion.estado === 'activa').length,
  );
}
