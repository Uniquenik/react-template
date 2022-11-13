//Example
import { useWatchedObject } from '../../base/firebase/FirebaseService';
import { User } from './UserTypes';

export function useUser(userId: string) {
  return useWatchedObject<User>(`/users/${userId}`);
}

export function useUserList() {
  return useWatchedObject<Array<User | null>>(`/users`);
}
