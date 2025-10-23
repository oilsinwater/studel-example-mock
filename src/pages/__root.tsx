import { Box, Stack } from '@mui/material';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TopBar } from '../components/TopBar';

/**
 * Basic layout with navbar and footer
 */
export const Route = createRootRoute({
  component: () => (
    <Stack
      spacing={0}
      sx={{
        height: '100%',
        backgroundColor: 'background.default',
        color: 'text.primary',
      }}
    >
      <TopBar />
      <Box
        component="main"
        sx={{
          flex: 1,
          paddingBottom: 6,
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Outlet />
      </Box>
    </Stack>
  ),
});
