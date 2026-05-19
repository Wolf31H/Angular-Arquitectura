import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { InventarioItem } from '../models/inventario-item.model';

@Injectable({ providedIn: 'root' })
export class InventarioRepository {
  list(): Observable<InventarioItem[]> {
    return of([
      {
        sku: 'INV-010',
        nombre: 'Resina para ortesis',
        stockActual: 6,
        stockMinimo: 8,
        costoUnitario: 48000,
        lote: 'L-2234',
      },
      {
        sku: 'INV-022',
        nombre: 'Lamina de silicona',
        stockActual: 15,
        stockMinimo: 10,
        costoUnitario: 28000,
        lote: 'L-2250',
      },
      {
        sku: 'INV-030',
        nombre: 'Fresa diamantada fina',
        stockActual: 3,
        stockMinimo: 5,
        costoUnitario: 22000,
        lote: 'L-2261',
      },
    ]);
  }
}
