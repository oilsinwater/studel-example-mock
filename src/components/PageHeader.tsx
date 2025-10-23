import React from 'react';
import { Box, BoxProps, Stack, Typography } from '@mui/material';

interface PageHeaderProps extends BoxProps {
  pageTitle: React.ReactNode;
  breadcrumbTitle?: string;
  description?: string;
  actions?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  pageTitle,
  breadcrumbTitle,
  description,
  actions,
  ...rest
}) => {
  return (
    <Box
      component="header"
      {...rest}
      sx={[
        {
          position: 'relative',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'center' },
          justifyContent: 'space-between',
          gap: 3,
          pb: 3,
          borderBottom: '1px solid',
          borderColor: 'divider',
        },
        ...(Array.isArray(rest.sx) ? rest.sx : rest.sx ? [rest.sx] : []),
      ]}
    >
      <Stack spacing={1.25} sx={{ maxWidth: 720 }}>
        <Typography variant="overline" color="text.secondary">
          {breadcrumbTitle || 'Workspace'}
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 500,
            letterSpacing: '-0.015em',
            lineHeight: 1.15,
          }}
        >
          {pageTitle}
        </Typography>
        {description ? (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        ) : null}
      </Stack>
      {actions ? (
        <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
          {actions}
        </Box>
      ) : null}
    </Box>
  );
};
