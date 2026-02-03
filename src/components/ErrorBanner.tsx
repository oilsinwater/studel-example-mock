import React from 'react';
import { Box, Button, Alert, AlertTitle } from '@mui/material';

interface ErrorBannerProps {
  title?: string;
  message: string;
  onRetry?: () => void;
}

export const ErrorBanner: React.FC<ErrorBannerProps> = ({
  title = 'Error',
  message,
  onRetry,
}) => {
  return (
    <Box data-testid="ed-error" sx={{ p: 2, width: '100%' }}>
      <Alert
        severity="error"
        action={
          onRetry && (
            <Button color="inherit" size="small" onClick={onRetry}>
              Retry
            </Button>
          )
        }
      >
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Box>
  );
};
