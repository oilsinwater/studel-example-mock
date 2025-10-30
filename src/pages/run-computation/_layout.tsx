import { Box } from '@mui/material';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import { RunComputationProvider } from './-context/ContextProvider';

export const Route = createFileRoute('/run-computation/_layout')({
  component: RunComputationLayout,
});

function RunComputationLayout() {
  return (
    <RunComputationProvider>
      <Box sx={{ py: { xs: 4, md: 6 }, px: { xs: 2, md: 3.5 } }}>
        <Outlet />
      </Box>
    </RunComputationProvider>
  );
}
