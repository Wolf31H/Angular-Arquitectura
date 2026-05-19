import { Component } from '@angular/core';

import { KpiCardComponent } from '../../../shared/ui/kpi-card/kpi-card.component';
import { PageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';

@Component({
  imports: [PageHeaderComponent, KpiCardComponent],
  templateUrl: './dashboard-home.page.html',
  styleUrl: './dashboard-home.page.scss',
})
export class DashboardHomePage {
  protected readonly resumen = [
    { title: 'Pacientes del mes', value: '328', helpText: '47 nuevos registros' },
    { title: 'Citas de hoy', value: '24', helpText: '18 confirmadas' },
    { title: 'Stock critico', value: '6 items', helpText: 'Requiere reposicion inmediata' },
    { title: 'Facturas pendientes', value: '11', helpText: '2 por validar con la DIAN' },
  ];

  protected readonly alertas = [
    'Dos pacientes diabeticos con control vencido.',
    'El producto Gel Antifungico tiene lote cercano a vencimiento.',
    'Promocion de hidratacion profunda termina en 3 dias.',
  ];
}
