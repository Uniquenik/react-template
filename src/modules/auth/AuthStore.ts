import { StateCreator } from 'zustand';

import { createStore } from 'base/createStore';

export interface IAuthStore {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
}

export const authStoreCreator: StateCreator<IAuthStore> = set => ({
  email: '',
  password: '',
  setEmail: (value: string) => set({ email: value }),
  setPassword: (value: string) => set({ password: value }),
});

export const useAuthStore = createStore<IAuthStore>(authStoreCreator, 'AuthStore');
