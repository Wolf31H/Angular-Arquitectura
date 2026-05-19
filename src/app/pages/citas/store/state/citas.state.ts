import { Cita } from '../../../../core/models/cita.model';
import { IGlobalState } from '../../../../store/state/global-state.state';

export interface ICitasModelReq {
  fecha?: string;
  estado?: Cita['estado'] | '';
}

export interface ICitasModelRes {
  data: Cita[] | null;
  error: boolean;
  message?: string;
}

export interface ICitasState extends IGlobalState {
  data: ICitasModelRes | null;
}

export const initCitasReducer: ICitasState = {
  data: null,
  loading: false,
  completed: false,
  error: false,
  errorMessage: '',
};
