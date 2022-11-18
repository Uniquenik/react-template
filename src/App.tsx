import React from 'react';
import { ColorScheme, ColorSchemeProvider, MantineProvider, MantineThemeOverride } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { useLocalStorage } from '@mantine/hooks';

export const App: React.FC = () => {
  const MANTINE_THEME: MantineThemeOverride = {
    primaryColor: 'green',
  };

  //Темная тема
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  //Render
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ ...MANTINE_THEME, colorScheme }} withGlobalStyles withNormalizeCSS>
        <RouterProvider router={router} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
