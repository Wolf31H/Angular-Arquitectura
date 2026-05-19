import { CurrencyPipe, NgClass } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { KpiCardComponent } from '../../../shared/ui/kpi-card/kpi-card.component';
import { PageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';
import { InventarioRepository } from '../data-access/inventario.repository';
import { InventarioItem } from '../models/inventario-item.model';

@Component({
  imports: [CurrencyPipe, NgClass, KpiCardComponent, PageHeaderComponent],
  templateUrl: './inventario-home.page.html',
  styleUrl: './inventario-home.page.scss',
})
export class InventarioHomePage {
  private readonly repository = inject(InventarioRepository);

  protected readonly items = toSignal(this.repository.list(), {
    initialValue: [] as InventarioItem[],
  });

  protected readonly criticos = computed(
    () => this.items().filter((item) => item.stockActual <= item.stockMinimo).length,
  );
}
