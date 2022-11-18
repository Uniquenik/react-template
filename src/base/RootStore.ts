import { UserStore } from '../modules/user/UserStore';
import { createContext, useContext } from 'react';

class RootStore {
  userStore = new UserStore();

  constructor() {
    this.userStore = new UserStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = createContext(rootStore);

export const useRootStore = () => useContext(storesContext);
