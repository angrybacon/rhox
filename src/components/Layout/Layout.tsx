import type { FunctionComponent, ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

interface Props {
  children: ReactNode;
}

export const Layout: FunctionComponent<Props> = ({ children }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Header />
    <Container component="main" maxWidth="lg" sx={{ my: 3 }}>
      {children}
    </Container>
    <Footer sx={{ mb: 3, mt: 'auto' }} />
  </Box>
);
