import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { API_ENDPOINTS } from '../../../core/constants/constants';
import { Paciente } from '../models/paciente.model';

const PACIENTES_MOCK: Paciente[] = [
  {
    id: 'PAC-001',
    nombreCompleto: 'Ana Milena Garzon',
    documento: 'CC 52345678',
    telefono: '+57 3120011223',
    ultimaVisita: '2026-05-03',
    estado: 'activo',
  },
  {
    id: 'PAC-002',
    nombreCompleto: 'Carlos Eduardo Bernal',
    documento: 'CC 80123456',
    telefono: '+57 3157788990',
    ultimaVisita: '2026-04-22',
    estado: 'seguimiento',
  },
  {
    id: 'PAC-003',
    nombreCompleto: 'Juliana Torres Ayala',
    documento: 'CC 1000567890',
    telefono: '+57 3014455667',
    ultimaVisita: '2026-03-15',
    estado: 'inactivo',
  },
];

@Injectable({ providedIn: 'root' })
export class PacientesRepository {
  private readonly httpClient = inject(HttpClient);

  list(): Observable<Paciente[]> {
    return this.httpClient
      .get<Paciente[]>(API_ENDPOINTS.pacientes)
      .pipe(catchError(() => of(PACIENTES_MOCK)));
  }
}
