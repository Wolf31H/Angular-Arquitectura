import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { resolveDataEndpoint } from '../../../core/constants/constants';
import { FacturaElectronica } from '../../../core/models/factura-electronica.model';

@Injectable({ providedIn: 'root' })
export class FacturacionElectronicaService {
  private readonly httpClient = inject(HttpClient);

  list(): Observable<FacturaElectronica[]> {
    return this.httpClient.get<FacturaElectronica[]>(
      resolveDataEndpoint('facturacion-electronica'),
    );
  }
}
