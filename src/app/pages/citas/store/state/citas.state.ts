import { Cita } from '../../../../core/models/cita.model';

export interface CitasState {
  items: Cita[];
  loading: boolean;
  error: string | null;
  loadedAt: string | null;
}

export const initialCitasState: CitasState = {
  items: [],
  loading: false,
  error: null,
  loadedAt: null,
};
