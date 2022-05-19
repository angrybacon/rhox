import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { Layout } from '@/components/Layout/Layout';

const Application = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <CssBaseline />
    <Component {...pageProps} />
  </Layout>
);

export default Application;
