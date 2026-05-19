export interface UserSession {
  userId: string;
  userName: string;
  role: 'administrador' | 'podologo' | 'recepcion';
  token: string;
}
