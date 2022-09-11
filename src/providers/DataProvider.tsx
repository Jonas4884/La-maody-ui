import axios from 'axios';
import { useMemo } from 'react';
import environment from '../conf/environment';
import { WithChildren } from "../types/proptypes";
import { DataContext } from "../utils/context/data";
import { DataService } from './types/DataProvider';

const API_BASE_URL = environment.apiBaseUrl;

export function DataProvider({ children }: WithChildren) {
  const getList = (resource: string) => axios.get(`${API_BASE_URL}/${resource}`);

  const getOne = (resource: string, id: number) =>
    axios.get(`${API_BASE_URL}/${resource}/${id}`);

  const deleteOne = (resource: string, id: number) =>
    axios.delete(`${API_BASE_URL}/${resource}/${id}`);

  const save = (resource: string, props: unknown) =>
    axios.post(`${API_BASE_URL}/${resource}`, props);

  const update = (resource: string, id: number, props: unknown) =>
    axios.patch(`${API_BASE_URL}/${resource}/${id}`, props);

  const methodToProvide = useMemo<DataService>(
    () => ({
      getList,
      save,
      update,
      getOne,
      deleteOne,
    }),
    []
  );

  return (
    <DataContext.Provider value={methodToProvide}>
      {children}
    </DataContext.Provider>
  );
}
