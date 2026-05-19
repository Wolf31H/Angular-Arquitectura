export interface Cita {
  id: string;
  paciente: string;
  profesional: string;
  fechaHora: string;
  servicio: string;
  estado: 'confirmada' | 'pendiente' | 'cancelada';
}
