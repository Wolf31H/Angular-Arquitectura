import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { resolveDataEndpoint } from '../../constants/constants';
import {
  IIncidentContentModel,
  IIncidentModelReq,
  IIncidentModelRes,
} from '../../models/global/incident.model';

@Injectable({ providedIn: 'root' })
export class IncidentService {
  private readonly httpClient = inject(HttpClient);

  getIncidentService(req: IIncidentModelReq): Observable<IIncidentModelRes> {
    const params = this.buildParams(req);

    return this.httpClient
      .get<IIncidentModelRes | IIncidentContentModel[]>(resolveDataEndpoint('incident'), {
        params,
      })
      .pipe(map((response) => this.normalizeResponse(response)));
  }

  private buildParams(req: IIncidentModelReq): HttpParams {
    let params = new HttpParams();

    Object.entries(req).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        params = params.set(key, String(value));
      }
    });

    return params;
  }

  private normalizeResponse(
    response: IIncidentModelRes | IIncidentContentModel[],
  ): IIncidentModelRes {
    if (Array.isArray(response)) {
      return {
        data: {
          content: response,
        },
        error: false,
      };
    }

    if (response && 'data' in response) {
      return response;
    }

    return {
      data: null,
      error: true,
      message: 'Respuesta de incidentes invalida',
    };
  }
}
