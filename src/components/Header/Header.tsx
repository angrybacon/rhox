import type { FunctionComponent } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { Link } from '@/components/Link/Link';

export const Header: FunctionComponent = () => (
  <AppBar component="header" position="static">
    <Toolbar sx={{ position: 'relative' }}>
      <Link href="/" sx={{ color: 'inherit', textDecoration: 'none' }}>
        Rhox
      </Link>
    </Toolbar>
  </AppBar>
);
