import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { InfoSquare, Mailbox } from 'tabler-icons-react';

import { ErrorBoundaryLayout } from 'base/components/ErrorBoundaryLayout';

const AuthScreen = lazy(() => import('screens/auth/AuthScreen')),
  MainScreen = lazy(() => import('screens/main/MainScreen')),
  ProfileScreen = lazy(() => import('screens/profile/ProfileScreen'));

export const Routes = {
  main: '/',
  auth: '/auth',
  profile: '/profile',
};

export const NavLinks: NavLinkModel[] = [
  {
    path: '/',
    title: 'Главная',
    icon: <Mailbox />,
  },
  {
    path: '/link2',
    title: 'Ссылка 2',
    icon: <InfoSquare />,
  },
  {
    path: '/link2',
    title: 'Ссылка 3',
    icon: <InfoSquare />,
  },
];

export const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
      {
        path: Routes.auth,
        element: <AuthScreen />,
      },
      {
        path: Routes.main,
        element: <MainScreen />,
      },
      {
        path: Routes.profile,
        element: <ProfileScreen />,
      },
    ],
  },
]);

export type NavLinkModel = {
  path: string;
  title?: string;
  icon?: JSX.Element;
};
