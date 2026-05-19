import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { KpiCardComponent } from '../../../shared/ui/kpi-card/kpi-card.component';
import { PageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';
import { FacturacionElectronicaRepository } from '../data-access/facturacion-electronica.repository';
import { FacturaElectronica } from '../models/factura-electronica.model';

@Component({
  imports: [CurrencyPipe, DatePipe, NgClass, KpiCardComponent, PageHeaderComponent],
  templateUrl: './facturacion-electronica-home.page.html',
  styleUrl: './facturacion-electronica-home.page.scss',
})
export class FacturacionElectronicaHomePage {
  private readonly repository = inject(FacturacionElectronicaRepository);

  protected readonly facturas = toSignal(this.repository.list(), {
    initialValue: [] as FacturaElectronica[],
  });

  protected readonly rechazadas = computed(
    () => this.facturas().filter((factura) => factura.estado === 'rechazada').length,
  );
}
