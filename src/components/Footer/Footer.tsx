import type { FunctionComponent } from 'react';
import { Box, Typography } from '@mui/material';
import type { SystemStyleObject } from '@mui/system';

interface Props {
  sx?: SystemStyleObject;
}

export const Footer: FunctionComponent<Props> = ({ sx }) => (
  <Box
    component="footer"
    sx={{ display: 'flex', justifyContent: 'center', ...sx }}
  >
    <Typography color="textSecondary" variant="caption">
      Copyright &copy; 2022 Rhox contributors.
    </Typography>
  </Box>
);
