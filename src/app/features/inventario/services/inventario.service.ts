import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { resolveDataEndpoint } from '../../../core/constants/constants';
import { InventarioItem } from '../../../core/models/inventario-item.model';

@Injectable({ providedIn: 'root' })
export class InventarioService {
  private readonly httpClient = inject(HttpClient);

  list(): Observable<InventarioItem[]> {
    return this.httpClient.get<InventarioItem[]>(resolveDataEndpoint('inventario'));
  }
}
