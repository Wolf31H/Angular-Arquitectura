import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { resolveDataEndpoint } from '../../../core/constants/constants';
import { Cita } from '../../../core/models/cita.model';

@Injectable({ providedIn: 'root' })
export class CitasService {
  private readonly httpClient = inject(HttpClient);

  list(): Observable<Cita[]> {
    return this.httpClient.get<Cita[]>(resolveDataEndpoint('citas'));
  }
}
