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
} as const;

export const API_ENDPOINTS = {
  pacientes: '/api/pacientes',
} as const;
