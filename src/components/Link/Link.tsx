import NextLink from 'next/link';
import type { FunctionComponent, ReactNode } from 'react';
import { Button, Link as MuiLink } from '@mui/material';
import type { SystemStyleObject } from '@mui/system';

interface Props {
  children: ReactNode;
  external?: boolean;
  href: string;
  sx?: SystemStyleObject;
}

export const Link: FunctionComponent<Props> = ({
  children,
  external,
  href,
  sx,
}) => {
  const extra =
    (external === undefined && href.startsWith('http')) || external
      ? { rel: 'noopener noreferrer', target: '_blank' }
      : {};
  return (
    <NextLink href={href} passHref>
      <MuiLink {...extra} sx={sx}>
        {children}
      </MuiLink>
    </NextLink>
  );
};
