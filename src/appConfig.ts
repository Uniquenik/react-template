export const appConfig = {
  apiUrl: {
    dev: 'https://api.punkapi.com/v2',
    prod: import.meta.env.VITE_APP_API_URL || 'https://api.punkapi.com/v2',
  },
};
