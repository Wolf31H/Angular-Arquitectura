import { createFeatureSelector, createSelector } from '@ngrx/store';

import { INCIDENT_FEATURE_KEY } from '../../core/constants/selectors.constants';
import { IIncidentState } from '../state/global-state.state';

export const selectIncidentState = createFeatureSelector<IIncidentState>(INCIDENT_FEATURE_KEY);

export const selectIncidentData = createSelector(
  selectIncidentState,
  (state) => state?.data,
);

export const selectIncidentMap = createSelector(
  selectIncidentState,
  (state) => state?.data?.data?.content || [],
);

export const selectIncidentMapped = createSelector(selectIncidentMap, (content) =>
  content.map((incident) => ({
    id: incident?.id.toString(),
    component_type: incident?.type.name,
    maximo: incident?.maximo,
    ot_maximo: incident?.ot_maximo,
    created_at: incident?.created_at,
  })),
);

export const selectIncidentLoading = createSelector(
  selectIncidentState,
  (state) => state?.loading,
);

export const selectIncidentErrorMessage = createSelector(
  selectIncidentState,
  (state) => state?.errorMessage,
);
