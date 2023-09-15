export const appConfig = {
  mode: import.meta.env.MODE,
  apiUrl: {
    dev: 'https://api.punkapi.com/v2',
    prod: import.meta.env.VITE_APP_API_URL || 'https://api.punkapi.com/v2',
  },
  firebase: {
    apiKey: import.meta.env.VITE_FB_API_KEY,
    authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FB_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FB_APP_ID,
  },
};

export const API_URL = import.meta.env.MODE === 'production' ? appConfig.apiUrl.prod : appConfig.apiUrl.dev;
