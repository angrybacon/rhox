import { grey } from '@mui/material/colors';
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
        '@font-face': {
          fontFamily: 'GoudyMedieval',
          src: `local("GoudyMedieval"), url("fonts/goudy-medieval.ttf") format("truetype")`,
        },
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
    background: { default: grey[50] },
    mode: 'light',
  },
});
