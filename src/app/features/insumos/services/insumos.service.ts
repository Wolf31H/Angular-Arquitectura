import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { resolveDataEndpoint } from '../../../core/constants/constants';
import { Insumo } from '../../../core/models/insumo.model';

@Injectable({ providedIn: 'root' })
export class InsumosService {
  private readonly httpClient = inject(HttpClient);

  list(): Observable<Insumo[]> {
    return this.httpClient.get<Insumo[]>(resolveDataEndpoint('insumos'));
  }
}
