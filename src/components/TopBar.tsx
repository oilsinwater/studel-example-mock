import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { AppLink } from './AppLink';

/**
 * Top navigation bar component
 */
export const TopBar: React.FC = () => {
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Workflows', to: '/explore-data' },
    { label: 'Benchmarks', to: '/quality-benchmark' },
    { label: 'Computation', to: '/run-computation' },
  ];

  return (
    <AppBar
      position="static"
      component="nav"
      sx={{
        backgroundColor: 'transparent',
      }}
    >
      <Toolbar
        sx={{
          gap: 4,
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          justifyContent: 'space-between',
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ flexWrap: 'wrap', gap: 1.5 }}
        >
          <Typography
            variant="subtitle1"
            component="span"
            sx={{
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            SciData Hub
          </Typography>
          <Typography
            variant="body2"
            component="span"
            color="text.secondary"
            sx={{ display: { xs: 'none', sm: 'inline' } }}
          >
            /
          </Typography>
          <Box
            component="nav"
            sx={{
              display: 'flex',
              gap: 1.5,
              flexWrap: 'wrap',
            }}
          >
            {navItems.map((item) => (
              <AppLink
                key={item.to}
                to={item.to}
                preload="intent"
                color="inherit"
                underline="none"
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    transition: 'color 0.2s ease',
                    '&:hover': { color: 'text.primary' },
                  }}
                >
                  {item.label}
                </Typography>
              </AppLink>
            ))}
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
