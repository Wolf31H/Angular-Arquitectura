import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Promocion } from '../models/promocion.model';

@Injectable({ providedIn: 'root' })
export class PromocionesRepository {
  list(): Observable<Promocion[]> {
    return of([
      {
        codigo: 'PR-001',
        nombre: 'Pedicure clinico + hidratacion',
        descuentoPorcentaje: 15,
        vigenteHasta: '2026-05-30',
        estado: 'activa',
      },
      {
        codigo: 'PR-002',
        nombre: 'Control de pie diabetico',
        descuentoPorcentaje: 10,
        vigenteHasta: '2026-06-15',
        estado: 'programada',
      },
    ]);
  }
}
