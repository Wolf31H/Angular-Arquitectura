import { AppState } from './app.state';
import { IIncidentState } from './global-state.state';

export interface RootState {
  app: AppState;
  incident: IIncidentState;
}
