import { type PropsWithChildren, createContext, useRef } from 'react';
import { type StoreApi, createStore } from 'zustand';

import { IAuthStore, authStoreCreator } from './AuthStore';

export const createAuthStore = () => {
  return createStore<IAuthStore>(authStoreCreator);
};

export const AuthStoreContext = createContext<StoreApi<IAuthStore>>(null as never);

export const AuthStoreProvider = ({ children }: PropsWithChildren) => {
    const authStoreRef = useRef(createAuthStore());

  return (
    <AuthStoreContext.Provider value={authStoreRef.current}>
      {children}
    </AuthStoreContext.Provider>
  );
}

