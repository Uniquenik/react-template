import { appConfig } from 'appConfig';
import { create, StateCreator, UseBoundStore, StoreApi } from 'zustand';
import { devtools } from 'zustand/middleware';

export const createStore = <T>(fn: StateCreator<T>, name: string): UseBoundStore<StoreApi<T>> => {
  if (appConfig.mode === 'development') {
    return create(devtools(fn, { name }));
  }

  return create(fn);
};
