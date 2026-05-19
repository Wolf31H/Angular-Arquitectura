import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { resolveDataEndpoint } from '../../../core/constants/constants';
import { InventarioItem } from '../../../core/models/inventario-item.model';
import {
  IInventarioModelReq,
  IInventarioModelRes,
} from '../../../pages/inventario/store/state/inventario.state';

@Injectable({ providedIn: 'root' })
export class InventarioService {
  private readonly httpClient = inject(HttpClient);

  getInventarioService(_req: IInventarioModelReq): Observable<IInventarioModelRes> {
    return this.httpClient
      .get<InventarioItem[] | IInventarioModelRes>(resolveDataEndpoint('inventario'))
      .pipe(map((response) => this.normalizeResponse(response)));
  }

  private normalizeResponse(
    response: InventarioItem[] | IInventarioModelRes,
  ): IInventarioModelRes {
    if (Array.isArray(response)) {
      return {
        data: response,
        error: false,
      };
    }

    if (response && 'data' in response) {
      return response;
    }

    return {
      data: null,
      error: true,
      message: 'Respuesta de inventario invalida',
    };
  }
}
