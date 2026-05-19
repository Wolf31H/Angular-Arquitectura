export interface FacturaElectronica {
  numero: string;
  paciente: string;
  fecha: string;
  valorTotal: number;
  estado: 'emitida' | 'aceptada' | 'rechazada';
}
