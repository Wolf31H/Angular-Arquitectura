export interface IIncidentModelReq {
  page?: number;
  size?: number;
  query?: string;
  sortBy?: string;
}

export interface IIncidentContentModel {
  id: number;
  type: {
    name: string;
  };
  maximo: number;
  ot_maximo: number;
  created_at: string;
}

export interface IIncidentModelRes {
  data: {
    content: IIncidentContentModel[];
  } | null;
  error: boolean;
  message?: string;
}
