import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { resolveDataEndpoint } from '../../../core/constants/constants';
import { HistoriaClinica } from '../../../core/models/historia-clinica.model';

@Injectable({ providedIn: 'root' })
export class HistoriasClinicasService {
  private readonly httpClient = inject(HttpClient);

  list(): Observable<HistoriaClinica[]> {
    return this.httpClient.get<HistoriaClinica[]>(resolveDataEndpoint('historias-clinicas'));
  }
}
