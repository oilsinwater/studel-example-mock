import React from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  Slider,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import { MetricFilter } from '../-config/taskflow.types';
import { qualityBenchmarkConfig } from '../-config/taskflow.config';
import { Surface } from '../../../components/Surface';

interface MetricFiltersProps {
  filters: MetricFilter[];
  onFilterChange: (filter: MetricFilter) => void;
  onClear: () => void;
  enabledMetrics: Set<MetricFilter['metric']>;
  onMetricToggle: (metric: MetricFilter['metric'], enabled: boolean) => void;
}

const metricRanges: Record<
  MetricFilter['metric'],
  { min: number; max: number; step: number }
> = {
  qualityScore: { min: 0.4, max: 1, step: 0.05 },
  completeness: { min: 60, max: 100, step: 1 },
  anomalyRate: { min: 0, max: 20, step: 1 },
  drift: { min: -3, max: 3, step: 0.25 },
};

export const MetricFilters: React.FC<MetricFiltersProps> = ({
  filters,
  onFilterChange,
  onClear,
  enabledMetrics,
  onMetricToggle,
}) => {
  const findFilterValue = (metric: MetricFilter['metric']): number => {
    const current = filters.find((filter) => filter.metric === metric);
    if (!current || current.threshold === undefined) {
      return metricRanges[metric].min;
    }
    return current.threshold;
  };

  return (
    <Surface
      dense
      title="Metric filters"
      eyebrow="Thresholds"
      data-testid="metric-filter"
    >
      <Stack spacing={2.5}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="text.secondary">
            Toggle the metrics you care about and tune their target ranges.
          </Typography>
          <Button variant="text" size="small" onClick={onClear}>
            Clear all
          </Button>
        </Stack>

        {qualityBenchmarkConfig.metrics.map((metric) => {
          const range = metricRanges[metric.field];
          const enabled = enabledMetrics.has(metric.field);
          return (
            <Box
              key={metric.field}
              data-testid={`metric-filter-${metric.field}`}
              sx={{
                p: 2,
                borderRadius: 2,
                border: '1px solid rgba(255,255,255,0.05)',
                backgroundColor: 'rgba(17,17,19,0.65)',
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Typography variant="subtitle2">{metric.label}</Typography>
                <FormControlLabel
                  control={
                    <Switch
                      size="small"
                      checked={enabled}
                      onChange={(event) =>
                        onMetricToggle(metric.field, event.target.checked)
                      }
                    />
                  }
                  label={enabled ? 'On' : 'Off'}
                />
              </Stack>
              <Typography variant="caption" color="text.secondary">
                {metric.description}
              </Typography>
              <Slider
                value={findFilterValue(metric.field)}
                onChange={(_, value) => {
                  onFilterChange({
                    metric: metric.field,
                    threshold: Array.isArray(value)
                      ? value[0]
                      : (value as number),
                    direction: metric.field === 'anomalyRate' ? 'lt' : 'gt',
                  });
                }}
                valueLabelDisplay="auto"
                min={range.min}
                max={range.max}
                step={range.step}
                disabled={!enabled}
                sx={{ mt: 2 }}
              />
            </Box>
          );
        })}
      </Stack>
    </Surface>
  );
};
