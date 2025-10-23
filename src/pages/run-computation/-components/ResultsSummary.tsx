import React from 'react';
import { Typography, Stack, Chip } from '@mui/material';
import { Run } from '../-config/taskflow.types';
import { Surface } from '../../../components/Surface';

interface ResultsSummaryProps {
  run: Run | undefined;
}

export const ResultsSummary: React.FC<ResultsSummaryProps> = ({ run }) => {
  if (!run) {
    return null;
  }

  return (
    <Surface
      dense
      title="Run summary"
      eyebrow="Execution details"
      data-testid="rc-results-summary"
    >
      <Stack spacing={1}>
        <Typography>
          <strong>Run ID:</strong> {run.runId}
        </Typography>
        <Typography>
          <strong>Dataset ID:</strong> {run.datasetId}
        </Typography>
        <Typography>
          <strong>Model ID:</strong> {run.modelId}
        </Typography>
        <Typography>
          <strong>Status:</strong>{' '}
          <Chip
            label={run.status}
            color={run.status === 'completed' ? 'success' : 'default'}
            size="small"
          />
        </Typography>
        <Typography>
          <strong>Created:</strong> {new Date(run.createdAt).toLocaleString()}
        </Typography>
        {run.completedAt && (
          <Typography>
            <strong>Completed:</strong>{' '}
            {new Date(run.completedAt).toLocaleString()}
          </Typography>
        )}
      </Stack>
    </Surface>
  );
};
