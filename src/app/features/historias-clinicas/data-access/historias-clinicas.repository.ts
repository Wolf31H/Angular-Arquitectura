import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HistoriaClinica } from '../models/historia-clinica.model';

@Injectable({ providedIn: 'root' })
export class HistoriasClinicasRepository {
  list(): Observable<HistoriaClinica[]> {
    return of([
      {
        id: 'HC-1001',
        pacienteId: 'PAC-001',
        diagnosticoPrincipal: 'Onicocriptosis bilateral',
        riesgoPieDiabetico: 'alto',
        ultimoControl: '2026-05-10',
        profesional: 'Dra. Laura Ibarra',
      },
      {
        id: 'HC-1002',
        pacienteId: 'PAC-002',
        diagnosticoPrincipal: 'Hiperqueratosis plantar',
        riesgoPieDiabetico: 'medio',
        ultimoControl: '2026-05-04',
        profesional: 'Dr. Daniel Orjuela',
      },
    ]);
  }
}
