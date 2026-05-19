import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { resolveDataEndpoint } from '../../../core/constants/constants';
import { Paciente } from '../../../core/models/paciente.model';
import { IPacientesModelReq, IPacientesModelRes } from '../../../pages/pacientes/store/state/pacientes.state';

@Injectable({ providedIn: 'root' })
export class PacientesService {
  private readonly httpClient = inject(HttpClient);

  getPacientesService(_req: IPacientesModelReq): Observable<IPacientesModelRes> {
    return this.httpClient
      .get<Paciente[] | IPacientesModelRes>(resolveDataEndpoint('pacientes'))
      .pipe(map((response) => this.normalizeResponse(response)));
  }

  private normalizeResponse(response: Paciente[] | IPacientesModelRes): IPacientesModelRes {
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
      message: 'Respuesta de pacientes invalida',
    };
  }
}
