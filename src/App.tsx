import { ColorScheme, ColorSchemeProvider, LoadingOverlay, MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

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

  const handleToggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === APP_THEME.DARK ? APP_THEME.LIGHT : APP_THEME.DARK));

  //Render
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={handleToggleColorScheme}>
      <MantineProvider theme={{ ...theme, colorScheme }} withGlobalStyles withNormalizeCSS>
        <Suspense fallback={<LoadingOverlay visible />}>
          <RouterProvider router={router} />
        </Suspense>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
