import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { SearchOff } from '@mui/icons-material';

interface EmptyStateProps {
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No results found',
  description = 'Try adjusting your filters or search terms.',
  action,
}) => {
  return (
    <Box
      data-testid="ed-empty"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        p: 4,
        textAlign: 'center',
        color: 'text.secondary',
      }}
    >
      <SearchOff sx={{ fontSize: 48, mb: 2, opacity: 0.5 }} />
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ mb: 3, maxWidth: 300 }}>
        {description}
      </Typography>
      {action && (
        <Button variant="outlined" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </Box>
  );
};
