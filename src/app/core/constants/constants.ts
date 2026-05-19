export const APP_RUNTIME_FLAGS = {
  useMocks: true,
} as const;

export const APP_STORAGE_KEYS = {
  authToken: 'clinic_auth_token',
  language: 'clinic_language',
  rootState: 'clinic_root_state',
} as const;

export const APP_STATUS_IDS = {
  active: 'activo',
  inactive: 'inactivo',
  pending: 'pendiente',
  approved: 'aprobado',
  rejected: 'rechazado',
} as const;

export const APP_LIMITS = {
  maxTextLength: 500,
  maxClinicalNoteLength: 5000,
  maxPhoneLength: 15,
  minPasswordLength: 8,
} as const;

export const APP_REGEX = {
  phone: /^\+?[0-9]{7,15}$/,
  decimal: /^\d+(\.\d{1,2})?$/,
  documentId: /^[A-Za-z0-9-]{5,20}$/,
} as const;

export const APP_MESSAGES = {
  genericHttpError: 'No fue posible completar la solicitud. Intenta nuevamente.',
  pacientesLoadError: 'No fue posible cargar los pacientes.',
  incidentServiceError: 'Ha ocurrido un error de servicio 1',
  incidentEmptyDataError: 'Ha ocurrido un error de servicio 2',
  incidentServerError: 'Ha ocurrido un error de servidor',
} as const;

export const APP_ENDPOINTS_CONFIG = {
  apiBaseUrl: '/api',
  mockBaseUrl: '/assets/mocks',
} as const;

export type DataResource =
  | 'incident'
  | 'pacientes'
  | 'historias-clinicas'
  | 'inventario'
  | 'facturacion-electronica'
  | 'insumos'
  | 'promociones'
  | 'citas';

const API_PATHS: Record<DataResource, string> = {
  incident: '/incident',
  pacientes: '/pacientes',
  'historias-clinicas': '/historias-clinicas',
  inventario: '/inventario',
  'facturacion-electronica': '/facturacion-electronica',
  insumos: '/insumos',
  promociones: '/promociones',
  citas: '/citas',
};

export function resolveDataEndpoint(resource: DataResource): string {
  if (APP_RUNTIME_FLAGS.useMocks) {
    return `${APP_ENDPOINTS_CONFIG.mockBaseUrl}/${resource}.json`;
  }

  return `${APP_ENDPOINTS_CONFIG.apiBaseUrl}${API_PATHS[resource]}`;
}
