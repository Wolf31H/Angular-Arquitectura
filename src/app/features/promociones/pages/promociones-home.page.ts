import { DatePipe, NgClass } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Promocion } from '../../../core/models/promocion.model';
import { KpiCardComponent } from '../../../shared/ui/kpi-card/kpi-card.component';
import { PageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';
import { PromocionesService } from '../services/promociones.service';

@Component({
  imports: [DatePipe, NgClass, KpiCardComponent, PageHeaderComponent],
  templateUrl: './promociones-home.page.html',
  styleUrl: './promociones-home.page.scss',
})
export class PromocionesHomePage {
  private readonly promocionesService = inject(PromocionesService);

  protected readonly promociones = toSignal(this.promocionesService.list(), {
    initialValue: [] as Promocion[],
  });

  protected readonly activas = computed(
    () => this.promociones().filter((promocion) => promocion.estado === 'activa').length,
  );
}
