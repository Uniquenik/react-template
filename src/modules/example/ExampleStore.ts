import { StateCreator } from 'zustand';

import { createStore } from 'base/createStore';

import { exampleService } from './ExampleService';
import { BeerModel } from './types/ExampleTypes';

export interface IExampleStore {
  loading: boolean;
  beerItem: BeerModel | null;
  getBeerItem: (id: string) => void;
  getRandomBeer: () => void;
}

export const exampleStoreCreator: StateCreator<IExampleStore> = set => ({
  loading: false,
  beerItem: null,
  getBeerItem: async id => {
    set({ loading: true });

    exampleService
      .getBeer(id)
      .then(item => {
        set({ beerItem: item });
      })
      .finally(() => {
        set({ loading: false });
      });
  },
  getRandomBeer: async () => {
    set({ loading: true });

    exampleService
      .getRandomBeer()
      .then(item => {
        set({ beerItem: item });
      })
      .finally(() => {
        set({ loading: false });
      });
  },
});

export const useExampleStore = createStore<IExampleStore>(exampleStoreCreator, 'ExampleStore');
