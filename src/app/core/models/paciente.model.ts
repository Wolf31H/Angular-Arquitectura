export interface Paciente {
  id: string;
  nombreCompleto: string;
  documento: string;
  telefono: string;
  ultimaVisita: string;
  estado: 'activo' | 'seguimiento' | 'inactivo';
}
