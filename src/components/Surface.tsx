import React from 'react';
import { Box, Paper, PaperProps, Stack, Typography } from '@mui/material';

interface SurfaceProps extends Omit<PaperProps, 'title'> {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  dense?: boolean;
  titleProps?: React.ComponentProps<typeof Typography>;
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
  titleProps,
  sx,
  ...rest
}) => {
  return (
    <Paper
      {...rest}
      sx={[
        {
          p: dense ? 2 : 3,
          borderRadius: 4,
          border: '1px solid rgba(255,255,255,0.08)',
          background:
            'linear-gradient(140deg, rgba(24,24,26,0.92) 0%, rgba(12,12,14,0.94) 100%)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 4px 24px -1px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {(eyebrow || title || actions) && (
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
          spacing={2}
          sx={{ mb: dense ? 2 : 3, flexShrink: 0 }}
        >
          <Stack spacing={0.5}>
            {eyebrow ? (
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ lineHeight: 1, letterSpacing: '0.05em' }}
              >
                {eyebrow}
              </Typography>
            ) : null}
            {title ? (
              <Typography
                variant="h6"
                component="h3"
                sx={{ fontWeight: 500, letterSpacing: '-0.01em' }}
                {...(titleProps as any)}
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
