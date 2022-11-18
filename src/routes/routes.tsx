import { createBrowserRouter } from 'react-router-dom';
import { AuthScreen } from '../screens/auth/AuthScreen';
import { CheckRoleScreen } from '../screens/auth/modules/CheckRoleScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import React from 'react';

export const Routes = {
  main: '/',
  auth: '/auth',
  profile: '/profile',
  checkRole: '/check-role',
};

export const router = createBrowserRouter([
  {
    path: Routes.auth,
    element: <AuthScreen />,
  },
  {
    path: Routes.checkRole,
    element: <CheckRoleScreen />,
  },
  {
    path: Routes.profile,
    element: <ProfileScreen />,
  },
]);
