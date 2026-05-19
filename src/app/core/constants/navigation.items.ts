import { NavItem } from '../interfaces/nav-item.interface';

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    label: 'Dashboard',
    description: 'Resumen de la operacion diaria',
    route: '/dashboard',
    icon: 'DB',
  },
  {
    label: 'Pacientes',
    description: 'Gestion de pacientes y seguimiento',
    route: '/pacientes',
    icon: 'PA',
  },
  {
    label: 'Historias clinicas',
    description: 'Evolucion clinica y antecedentes',
    route: '/historias-clinicas',
    icon: 'HC',
  },
  {
    label: 'Inventario',
    description: 'Control de stock y lotes',
    route: '/inventario',
    icon: 'IN',
  },
  {
    label: 'Facturacion electronica',
    description: 'Documentos tributarios y recaudo',
    route: '/facturacion-electronica',
    icon: 'FE',
  },
  {
    label: 'Insumos',
    description: 'Consumo de materiales por servicio',
    route: '/insumos',
    icon: 'IS',
  },
  {
    label: 'Promociones',
    description: 'Campanas y paquetes comerciales',
    route: '/promociones',
    icon: 'PR',
  },
  {
    label: 'Citas',
    description: 'Agenda y confirmacion de atenciones',
    route: '/citas',
    icon: 'CI',
  },
  {
    label: 'Reportes',
    description: 'Indicadores operativos y financieros',
    route: '/reportes',
    icon: 'RP',
  },
];
