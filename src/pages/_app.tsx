import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Layout } from '@/components/Layout/Layout';
import { theme } from '@/theme/theme';

const Application = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Component {...pageProps} />
    </ThemeProvider>
  </Layout>
);

export default Application;
