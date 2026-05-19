export interface HistoriaClinica {
  id: string;
  pacienteId: string;
  diagnosticoPrincipal: string;
  riesgoPieDiabetico: 'bajo' | 'medio' | 'alto';
  ultimoControl: string;
  profesional: string;
}
