import { IIncidentModelRes } from '../../core/models/global/incident.model';

export interface IGlobalState {
  loading: boolean;
  completed: boolean;
  error: boolean;
  errorMessage: string;
}

export interface IIncidentState extends IGlobalState {
  data: IIncidentModelRes | null;
}

export interface AppState {
  incident: IIncidentState;
}
