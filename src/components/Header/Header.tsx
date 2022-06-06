import type { FunctionComponent } from 'react';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { Link } from '@/components/Link/Link';

export const Header: FunctionComponent = () => (
  <AppBar component="header" position="static">
    <Toolbar sx={{ position: 'relative' }}>
      <Link href="/" sx={{ color: 'inherit', textDecoration: 'none' }}>
        Rhox
      </Link>
      <Box
        component="nav"
        sx={{
          justifyContent: 'center',
          display: 'flex',
          left: 0,
          pointerEvents: 'none',
          position: 'absolute',
          right: 0,
          '&& > *': { mx: 1, pointerEvents: 'initial' },
        }}
      >
        <Button color="inherit" variant="text">
          <Link
            href="/create"
            sx={{ color: 'inherit', textDecoration: 'none' }}
          >
            Create
          </Link>
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);
