import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Cita } from '../models/cita.model';

@Injectable({ providedIn: 'root' })
export class CitasRepository {
  list(): Observable<Cita[]> {
    return of([
      {
        id: 'CIT-901',
        paciente: 'Ana Milena Garzon',
        profesional: 'Dra. Laura Ibarra',
        fechaHora: '2026-05-19T08:30:00',
        servicio: 'Podologia clinica integral',
        estado: 'confirmada',
      },
      {
        id: 'CIT-902',
        paciente: 'Carlos Eduardo Bernal',
        profesional: 'Dr. Daniel Orjuela',
        fechaHora: '2026-05-19T10:00:00',
        servicio: 'Control pie diabetico',
        estado: 'pendiente',
      },
    ]);
  }
}
