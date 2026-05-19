import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { KpiCardComponent } from '../../../shared/ui/kpi-card/kpi-card.component';
import { PageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';
import { InsumosRepository } from '../data-access/insumos.repository';
import { Insumo } from '../models/insumo.model';

@Component({
  imports: [CurrencyPipe, KpiCardComponent, PageHeaderComponent],
  templateUrl: './insumos-home.page.html',
  styleUrl: './insumos-home.page.scss',
})
export class InsumosHomePage {
  private readonly repository = inject(InsumosRepository);

  protected readonly insumos = toSignal(this.repository.list(), {
    initialValue: [] as Insumo[],
  });
}
