import { Paciente } from '../../../../core/models/paciente.model';
import { IGlobalState } from '../../../../store/state/global-state.state';

export interface IPacientesModelReq {
  search?: string;
  estado?: Paciente['estado'] | '';
}

export interface IPacientesModelRes {
  data: Paciente[] | null;
  error: boolean;
  message?: string;
}

export interface IPacientesState extends IGlobalState {
  data: IPacientesModelRes | null;
}

export const initPacientesReducer: IPacientesState = {
  data: null,
  loading: false,
  completed: false,
  error: false,
  errorMessage: '',
};
