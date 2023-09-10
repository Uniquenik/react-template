import { useMediaQuery } from '@mantine/hooks';

import { theme } from 'styles/theme';

export const useAllMQ = () => {
  return {
    isXS: useMediaQuery(`(min-width: ${theme.breakpoints?.xs})`),
    isSM: useMediaQuery(`(min-width: ${theme.breakpoints?.sm})`),
    isMD: useMediaQuery(`(min-width: ${theme.breakpoints?.md})`),
    isLG: useMediaQuery(`(min-width: ${theme.breakpoints?.lg})`),
    isXL: useMediaQuery(`(min-width: ${theme.breakpoints?.xl})`),
  };
};
