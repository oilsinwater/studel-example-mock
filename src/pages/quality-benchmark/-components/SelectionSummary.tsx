import React from 'react';
import { Button, Chip, Divider, Stack, Typography } from '@mui/material';
import { Surface } from '../../../components/Surface';

interface SelectionSummaryProps {
  originFlow: string | null;
  selectedIds: string[];
  baselineId: string | null;
  onReset: () => void;
}

export const SelectionSummary: React.FC<SelectionSummaryProps> = ({
  originFlow,
  selectedIds,
  baselineId,
  onReset,
}) => {
  return (
    <Surface
      dense
      title="Selection summary"
      eyebrow="Benchmark state"
      data-testid="qb-selection-summary"
    >
      <Stack spacing={2}>
        <Typography variant="body2" color="text.secondary">
          Choose at least two datasets to unlock comparison metrics. The
          baseline anchors delta calculations across charts.
        </Typography>
        <Divider flexItem sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />
        <Typography variant="body2">
          Selected datasets: <strong>{selectedIds.length}</strong>
        </Typography>
        <Typography
          variant="body2"
          component="div"
          sx={{ display: 'flex', gap: 1 }}
        >
          Baseline dataset:{' '}
          {baselineId ? (
            <Chip label={baselineId} size="small" color="primary" />
          ) : (
            '—'
          )}
        </Typography>
        {originFlow ? (
          <Chip
            label={`Origin: ${originFlow}`}
            size="small"
            variant="outlined"
            sx={{ alignSelf: 'flex-start' }}
          />
        ) : null}
        <Button variant="text" color="secondary" onClick={onReset} size="small">
          Reset selection
        </Button>
      </Stack>
    </Surface>
  );
};
