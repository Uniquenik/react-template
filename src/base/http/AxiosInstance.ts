import { appConfig } from 'appConfig';
import axios from 'axios';

export const API_URL = import.meta.env.MODE === 'production' ? appConfig.apiUrl.prod : appConfig.apiUrl.dev;

const SERVER_ERROR = 500;

export const $api = axios.create({
  headers: {
    'Access-Control-Allow-Credentials': '*',
  },
});

$api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response?.status === SERVER_ERROR) {
      //TODO
    }

    return Promise.reject(error);
  },
);
