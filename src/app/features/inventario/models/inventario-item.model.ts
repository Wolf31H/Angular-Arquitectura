export interface InventarioItem {
  sku: string;
  nombre: string;
  stockActual: number;
  stockMinimo: number;
  costoUnitario: number;
  lote: string;
}
