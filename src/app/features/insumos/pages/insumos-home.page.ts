import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Insumo } from '../../../core/models/insumo.model';
import { KpiCardComponent } from '../../../shared/ui/kpi-card/kpi-card.component';
import { PageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';
import { InsumosService } from '../services/insumos.service';

@Component({
  imports: [CurrencyPipe, KpiCardComponent, PageHeaderComponent],
  templateUrl: './insumos-home.page.html',
  styleUrl: './insumos-home.page.scss',
})
export class InsumosHomePage {
  private readonly insumosService = inject(InsumosService);

  protected readonly insumos = toSignal(this.insumosService.list(), {
    initialValue: [] as Insumo[],
  });
}
