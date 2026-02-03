import React from 'react';
import { Button, Stack } from '@mui/material';
import { Visibility, BarChart, Assessment } from '@mui/icons-material';
import { Surface } from '../../../components/Surface';

interface PrimaryActionsProps {
  onViewDetail: () => void;
  onVisualize: () => void;
  onBenchmarkQuality: () => void;
  disabled: boolean;
}

export const PrimaryActions: React.FC<PrimaryActionsProps> = ({
  onViewDetail,
  onVisualize,
  onBenchmarkQuality,
  disabled,
}) => {
  return (
    <Surface dense title="Next steps" eyebrow="Actions">
      <Stack spacing={2}>
        <Button
          data-testid="view-detail-button"
          variant="contained"
          startIcon={<Visibility />}
          onClick={onViewDetail}
          disabled={disabled}
          fullWidth
          aria-label="View Details"
        >
          View Details
        </Button>
        <Button
          data-testid="visualize-button"
          variant="outlined"
          startIcon={<BarChart />}
          onClick={onVisualize}
          disabled={disabled}
          fullWidth
          aria-label="Visualize Dataset"
        >
          Visualize
        </Button>
        <Button
          data-testid="benchmark-quality-button"
          variant="outlined"
          color="secondary"
          startIcon={<Assessment />}
          onClick={onBenchmarkQuality}
          disabled={disabled}
          fullWidth
          aria-label="Benchmark Quality"
        >
          Benchmark Quality
        </Button>
      </Stack>
    </Surface>
  );
};
