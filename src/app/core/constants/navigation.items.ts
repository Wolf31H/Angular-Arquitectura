import { NavItem } from '../interfaces/nav-item.interface';

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    label: 'Dashboard',
    description: 'Resumen de la operacion diaria',
    route: '/dashboard',
    icon: 'dashboard',
  },
  {
    label: 'Pacientes',
    description: 'Gestion de pacientes y seguimiento',
    route: '/pacientes',
    icon: 'groups',
  },
  {
    label: 'Historias clinicas',
    description: 'Evolucion clinica y antecedentes',
    route: '/historias-clinicas',
    icon: 'medical_services',
  },
  {
    label: 'Inventario',
    description: 'Control de stock y lotes',
    route: '/inventario',
    icon: 'inventory_2',
  },
  {
    label: 'Facturacion electronica',
    description: 'Documentos tributarios y recaudo',
    route: '/facturacion-electronica',
    icon: 'receipt_long',
  },
  {
    label: 'Insumos',
    description: 'Consumo de materiales por servicio',
    route: '/insumos',
    icon: 'science',
  },
  {
    label: 'Promociones',
    description: 'Campanas y paquetes comerciales',
    route: '/promociones',
    icon: 'campaign',
  },
  {
    label: 'Citas',
    description: 'Agenda y confirmacion de atenciones',
    route: '/citas',
    icon: 'event_note',
  },
  {
    label: 'Reportes',
    description: 'Indicadores operativos y financieros',
    route: '/reportes',
    icon: 'insights',
  },
];
