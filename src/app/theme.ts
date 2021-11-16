import { createTheme } from '@material-ui/core';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#000',
      main: '#000',
      dark: '#000',
      contrastText: '#F7F6F6',
    },
    secondary: {
      light: '#F7F6F6',
      main: '#939598',
      dark: '#939598',
      contrastText: '#FFF',
    },
  },
  typography: {
    h1: {
      fontSize: '1.8em',
    },
  },
});
