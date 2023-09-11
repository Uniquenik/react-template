import axios from 'axios';

import NotificationHelper from 'base/helpers/NotificationHelper';

const SERVER_ERROR = 500;

const $api = axios.create({
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
      NotificationHelper.showApiError(error);
    } else {
      NotificationHelper.showApiError(error);
    }

    return Promise.reject(error);
  },
);

export default $api;
