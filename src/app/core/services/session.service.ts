import { Injectable, computed, signal } from '@angular/core';

import { UserSession } from '../models/user-session.model';

@Injectable({ providedIn: 'root' })
export class SessionService {
  private readonly sessionState = signal<UserSession | null>({
    userId: 'usr-001',
    userName: 'Coordinacion Clinica',
    role: 'administrador',
    token: 'mock-token',
  });

  readonly session = computed(() => this.sessionState());
  readonly isAuthenticated = computed(() => Boolean(this.sessionState()?.token));

  setSession(session: UserSession): void {
    this.sessionState.set(session);
  }

  clearSession(): void {
    this.sessionState.set(null);
  }
}
