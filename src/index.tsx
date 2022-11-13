import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Navigation from './components/layouts/navigation';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { AuthScreen } from './screens/auth/AuthScreen';
import { ProfileScreen } from './screens/profile/ProfileScreen';

const MANTINE_THEME: MantineThemeOverride = {
  colors: {
    brand: ['#FFE8CC', '#FFE8CC', '#FFE8CC', '#FFE8CC', '#FFE8CC', '#FFE8CC', '#FFE8CC', '#FFE8CC', '#FFE8CC'],
  },
  primaryColor: 'orange',
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthScreen />,
  },
  {
    path: '/profile',
    element: <ProfileScreen />,
  },
]);

ReactDOM.render(
  <MantineProvider theme={MANTINE_THEME}>
    <Navigation>
      <RouterProvider router={router} />
    </Navigation>
  </MantineProvider>,
  document.getElementById('root'),
);
