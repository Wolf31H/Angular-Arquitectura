export interface Promocion {
  codigo: string;
  nombre: string;
  descuentoPorcentaje: number;
  vigenteHasta: string;
  estado: 'activa' | 'programada' | 'finalizada';
}
