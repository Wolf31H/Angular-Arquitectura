import { CurrencyPipe, NgClass } from '@angular/common';
import { Component, OnInit, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { InventarioItem } from '../../../core/models/inventario-item.model';
import { InventarioFacade } from '../../../pages/inventario/store/facade/inventario.facade';
import { KpiCardComponent } from '../../../shared/ui/kpi-card/kpi-card.component';
import { PageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';

@Component({
  imports: [CurrencyPipe, NgClass, KpiCardComponent, PageHeaderComponent],
  providers: [InventarioFacade],
  templateUrl: './inventario-home.page.html',
  styleUrl: './inventario-home.page.scss',
})
export class InventarioHomePage implements OnInit {
  private readonly inventarioFacade = inject(InventarioFacade);

  protected readonly items = toSignal(this.inventarioFacade.items$, {
    initialValue: [] as InventarioItem[],
  });

  protected readonly cargando = toSignal(this.inventarioFacade.loading$, {
    initialValue: false,
  });

  protected readonly error = toSignal(this.inventarioFacade.error$, {
    initialValue: null,
  });

  protected readonly criticos = computed(
    () => this.items().filter((item) => item.stockActual <= item.stockMinimo).length,
  );

  ngOnInit(): void {
    this.inventarioFacade.loadInventario();
  }
}
