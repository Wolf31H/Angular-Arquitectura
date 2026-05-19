import { Paciente } from '../../../../features/pacientes/models/paciente.model';

export interface PacientesState {
  items: Paciente[];
  loading: boolean;
  error: string | null;
  loadedAt: string | null;
}

export const initialPacientesState: PacientesState = {
  items: [],
  loading: false,
  error: null,
  loadedAt: null,
};
