import type { FunctionComponent, ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

interface Props {
  children: ReactNode;
}

export const Layout: FunctionComponent<Props> = ({ children }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Header />
    {children}
    <Footer sx={{ mt: 'auto' }} />
  </Box>
);
