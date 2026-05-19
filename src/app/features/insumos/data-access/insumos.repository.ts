import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Insumo } from '../models/insumo.model';

@Injectable({ providedIn: 'root' })
export class InsumosRepository {
  list(): Observable<Insumo[]> {
    return of([
      {
        codigo: 'INS-201',
        descripcion: 'Guantes de nitrilo',
        unidadMedida: 'Caja x 100',
        costoPromedio: 55000,
        consumoMensual: 14,
      },
      {
        codigo: 'INS-305',
        descripcion: 'Antiseptico dermatologico',
        unidadMedida: 'Litro',
        costoPromedio: 34000,
        consumoMensual: 9,
      },
      {
        codigo: 'INS-411',
        descripcion: 'Crema regeneradora',
        unidadMedida: 'Tubo',
        costoPromedio: 22000,
        consumoMensual: 25,
      },
    ]);
  }
}
