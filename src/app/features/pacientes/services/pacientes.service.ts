import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Paciente } from '../../../core/models/paciente.model';
import { resolveDataEndpoint } from '../../../core/constants/constants';

@Injectable({ providedIn: 'root' })
export class PacientesService {
  private readonly httpClient = inject(HttpClient);

  list(): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(resolveDataEndpoint('pacientes'));
  }
}
