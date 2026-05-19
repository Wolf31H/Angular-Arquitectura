import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { resolveDataEndpoint } from '../../../core/constants/constants';
import { Cita } from '../../../core/models/cita.model';
import { ICitasModelReq, ICitasModelRes } from '../../../pages/citas/store/state/citas.state';

@Injectable({ providedIn: 'root' })
export class CitasService {
  private readonly httpClient = inject(HttpClient);

  getCitasService(_req: ICitasModelReq): Observable<ICitasModelRes> {
    return this.httpClient
      .get<Cita[] | ICitasModelRes>(resolveDataEndpoint('citas'))
      .pipe(map((response) => this.normalizeResponse(response)));
  }

  private normalizeResponse(response: Cita[] | ICitasModelRes): ICitasModelRes {
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
      message: 'Respuesta de citas invalida',
    };
  }
}
