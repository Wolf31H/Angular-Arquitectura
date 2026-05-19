import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { resolveDataEndpoint } from '../../../core/constants/constants';
import { Promocion } from '../../../core/models/promocion.model';

@Injectable({ providedIn: 'root' })
export class PromocionesService {
  private readonly httpClient = inject(HttpClient);

  list(): Observable<Promocion[]> {
    return this.httpClient.get<Promocion[]>(resolveDataEndpoint('promociones'));
  }
}
