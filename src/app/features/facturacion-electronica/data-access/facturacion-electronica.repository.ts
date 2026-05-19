import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { FacturaElectronica } from '../models/factura-electronica.model';

@Injectable({ providedIn: 'root' })
export class FacturacionElectronicaRepository {
  list(): Observable<FacturaElectronica[]> {
    return of([
      {
        numero: 'FE-4502',
        paciente: 'Ana Milena Garzon',
        fecha: '2026-05-17',
        valorTotal: 185000,
        estado: 'aceptada',
      },
      {
        numero: 'FE-4503',
        paciente: 'Carlos Eduardo Bernal',
        fecha: '2026-05-18',
        valorTotal: 96000,
        estado: 'emitida',
      },
      {
        numero: 'FE-4504',
        paciente: 'Maria Salazar',
        fecha: '2026-05-18',
        valorTotal: 142000,
        estado: 'rechazada',
      },
    ]);
  }
}
