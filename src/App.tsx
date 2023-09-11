import { ColorScheme, ColorSchemeProvider, LoadingOverlay, MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { Notifications } from '@mantine/notifications';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';

import ClientErrorScreen from 'screens/client-error/ClientErrorScreen';
import { theme } from 'styles/theme';
import { MANTINE_THEME_KEY, APP_THEME } from 'styles/types';

import { router } from './routes/routes';

export const App: React.FC = () => {
  //Темная тема
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: MANTINE_THEME_KEY,
    defaultValue: APP_THEME.LIGHT,
    getInitialValueInEffect: true,
  });

  //Handlers
  const handleToggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === APP_THEME.DARK ? APP_THEME.LIGHT : APP_THEME.DARK));

  //Render
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={handleToggleColorScheme}>
      <MantineProvider theme={{ ...theme, colorScheme }} withGlobalStyles withNormalizeCSS>
        <Notifications bottom={80} />
        <Suspense fallback={<LoadingOverlay visible />}>
          <ErrorBoundary
            resetKeys={[window.location.pathname]}
            fallbackRender={({ error, resetErrorBoundary }) => (
              <ClientErrorScreen error={error} onHandleReload={resetErrorBoundary} />
            )}
          >
            <RouterProvider router={router} />
          </ErrorBoundary>
        </Suspense>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
