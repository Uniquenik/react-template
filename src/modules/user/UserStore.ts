import { createStore } from 'base/createStore';

import { UserModel } from './types/UserTypes';

interface IUserStore {
  loading: boolean;
  userUid: string | null;
  userInfo: UserModel | null;
  setUserUid: (value: string | null) => void;
  setUserInfo: (value: UserModel | null) => void;
  resetStore: () => void;
}

export const useUserStore = createStore<IUserStore>(
  set => ({
    loading: false,
    userUid: null,
    userInfo: null,
    setUserUid: (value: string | null) => set({ userUid: value }),
    setUserInfo: (value: UserModel | null) => set({ userInfo: value }),
    resetStore: () => set({ userUid: null, userInfo: null }),
  }),
  'UserStore',
);
