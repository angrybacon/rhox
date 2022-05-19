import { Theme, createTheme } from '@mui/material/styles';

const base: Theme = createTheme();

export const theme: Theme = createTheme({
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: { padding: base.spacing(3) },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        p: { marginTop: 0, '&:last-child': { marginBottom: 0 } },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: { borderRadius: 16 },
      },
    },
  },
  palette: {
    mode: 'light',
  },
});
