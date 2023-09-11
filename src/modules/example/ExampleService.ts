import { API_URL } from 'appConfig';

import $api from 'base/http/AxiosInstance';

import { BeerModel } from './types/ExampleTypes';

export const exampleEndpoints = {
  GET_BEER: (id: string) => `${API_URL}/beers/${id}`,
  GET_RANDOM_BEER: `${API_URL}/beers/random`,
};

export class ExampleService {
  async getBeer(id: string): Promise<BeerModel> {
    const { data } = await $api.get(exampleEndpoints.GET_BEER(id));

    return data?.[0];
  }

  async getRandomBeer(): Promise<BeerModel> {
    const { data } = await $api.get(exampleEndpoints.GET_RANDOM_BEER);

    return data?.[0];
  }
}

export const exampleService = new ExampleService();
