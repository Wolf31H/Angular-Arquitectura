import { Component } from '@angular/core';

import { KpiCardComponent } from '../../../shared/ui/kpi-card/kpi-card.component';
import { PageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';

@Component({
  imports: [KpiCardComponent, PageHeaderComponent],
  templateUrl: './reportes-home.page.html',
  styleUrl: './reportes-home.page.scss',
})
export class ReportesHomePage {
  protected readonly indicadores = [
    {
      title: 'Ingresos mensuales',
      value: '$ 48.600.000',
      helpText: 'Consolidado de servicios y tienda.',
    },
    {
      title: 'Margen de productos',
      value: '42 %',
      helpText: 'Incluye ortesis, cremas y accesorios.',
    },
    {
      title: 'Retencion pacientes',
      value: '86 %',
      helpText: 'Pacientes con minimo 2 controles al semestre.',
    },
  ];

  protected readonly sugerencias = [
    'Cruzar reporte de consumo de insumos contra facturacion por servicio.',
    'Medir tasa de conversion de promociones por segmento de edad.',
    'Implementar exportacion a Excel y PDF para junta administrativa.',
  ];
}
