import { appConfig } from 'appConfig';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const app = initializeApp({
  apiKey: appConfig.firebase.apiKey,
  authDomain: appConfig.firebase.authDomain,
  //databaseURL: import.meta.env.VITE_FB_DB_URL,
  projectId: appConfig.firebase.projectId,
  storageBucket: appConfig.firebase.storageBucket,
  messagingSenderId: appConfig.firebase.messagingSenderId,
  appId: appConfig.firebase.appId,
});

export const auth = getAuth(app);
export const db = getDatabase(app);
