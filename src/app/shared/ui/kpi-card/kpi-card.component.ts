import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-kpi-card',
  imports: [MatCardModule],
  templateUrl: './kpi-card.component.html',
  styleUrl: './kpi-card.component.scss',
})
export class KpiCardComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) value = '';
  @Input() helpText = '';
}
