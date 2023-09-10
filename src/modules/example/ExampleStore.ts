import { makeAutoObservable } from 'mobx';

import { ExampleService } from './ExampleService';
import { BeerModel } from './types/ExampleTypes';

export class ExampleStore {
  loading = false;

  beerItem: BeerModel | null = null;

  private exampleService: ExampleService;

  constructor() {
    makeAutoObservable(this);
    this.exampleService = new ExampleService();
  }

  getBeerItem = (id: string) => {
    this.setLoading(true);

    this.exampleService
      .getBeer(id)
      .then(item => {
        this.setBeerItem(item);
      })
      .finally(() => {
        this.setLoading(false);
      });
  };

  setLoading = (value: boolean) => {
    this.loading = value;
  };

  setBeerItem = (value: BeerModel | null) => {
    this.beerItem = value;
  };

  resetStore = () => {};
}
