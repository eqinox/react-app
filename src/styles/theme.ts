import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#030f18', // Use for links
    },
    background: {
      default: '#fff7f3',
      paper: '#ffffff',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    text: {
      primary: '#ffffff', // Default text color for dark mode
      secondary: '#fff7f3', // Use for links
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

