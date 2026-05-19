import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { FacturaElectronica } from '../../../core/models/factura-electronica.model';
import { KpiCardComponent } from '../../../shared/ui/kpi-card/kpi-card.component';
import { PageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';
import { FacturacionElectronicaService } from '../services/facturacion-electronica.service';

@Component({
  imports: [CurrencyPipe, DatePipe, NgClass, KpiCardComponent, PageHeaderComponent],
  templateUrl: './facturacion-electronica-home.page.html',
  styleUrl: './facturacion-electronica-home.page.scss',
})
export class FacturacionElectronicaHomePage {
  private readonly facturacionElectronicaService = inject(FacturacionElectronicaService);

  protected readonly facturas = toSignal(this.facturacionElectronicaService.list(), {
    initialValue: [] as FacturaElectronica[],
  });

  protected readonly rechazadas = computed(
    () => this.facturas().filter((factura) => factura.estado === 'rechazada').length,
  );
}
