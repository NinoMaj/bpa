import { colors } from './colors';

export const theme = {
  app: {
    padding: 8,
  },

  boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.5)',

  colors: {
    appBackground: `linear-gradient(to right, ${colors.tertiary}, ${colors.quaternary})`,
    main: colors.primary,
    secondary: colors.secondary,
    mainBackground: colors.tertiary,
    secondaryBackground: colors.quaternary,
    error: colors.error,
    inactive: colors.gray,
    palette: {
      white: colors.white,
      black: colors.black,
    },
    text: {
      main: colors.gray,
      secondary: colors.darkGray,
      white: colors.white,
    },
  },

  font: {
    size: {
      smallest: '12rem',
      small: '14px',
      normal: '16px',
    },
  },

  header: {
    height: 40,
  },
};
