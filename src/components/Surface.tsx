import React from 'react';
import { Box, Paper, PaperProps, Stack, Typography } from '@mui/material';

interface SurfaceProps extends PaperProps {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  dense?: boolean;
}

/**
 * Shared surface component inspired by Are.na's minimal cards.
 * Provides a translucent gradient background, thin borders,
 * and optional header content for titles or actions.
 */
export const Surface: React.FC<SurfaceProps> = ({
  eyebrow,
  title,
  description,
  actions,
  dense = false,
  children,
  sx,
  ...rest
}) => {
  return (
    <Paper
      {...rest}
      sx={[
        {
          p: dense ? 2 : 3,
          borderRadius: 20,
          border: '1px solid rgba(255,255,255,0.08)',
          background:
            'linear-gradient(140deg, rgba(24,24,26,0.92) 0%, rgba(12,12,14,0.94) 100%)',
          boxShadow: '0 35px 70px rgba(0,0,0,0.35)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          flexDirection: 'column',
          gap: dense ? 2 : 3,
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {(eyebrow || title || description || actions) && (
        <Stack
          direction="row"
          spacing={2}
          alignItems="flex-start"
          sx={{ mb: children ? (dense ? 1.5 : 2.5) : 0 }}
        >
          <Stack spacing={0.75} sx={{ flex: 1 }}>
            {eyebrow ? (
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ letterSpacing: '0.16em' }}
              >
                {eyebrow}
              </Typography>
            ) : null}
            {title ? (
              <Typography
                variant="h6"
                component="h3"
                sx={{ fontWeight: 500, letterSpacing: '-0.01em' }}
              >
                {title}
              </Typography>
            ) : null}
            {description ? (
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            ) : null}
          </Stack>
          {actions ? <Box sx={{ flexShrink: 0 }}>{actions}</Box> : null}
        </Stack>
      )}
      {children}
    </Paper>
  );
};
