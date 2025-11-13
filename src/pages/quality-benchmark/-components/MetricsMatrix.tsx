import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Paper, PaperProps, Typography } from '@mui/material';
import { BenchmarkRow } from '../-config/taskflow.types';
import { qualityBenchmarkConfig } from '../-config/taskflow.config';

interface MetricsMatrixProps {
  rows: BenchmarkRow[];
  baselineId: string | null;
  onRowClick: (id: string) => void;
  sx?: PaperProps['sx'];
}

export const MetricsMatrix: React.FC<MetricsMatrixProps> = ({
  rows,
  baselineId,
  onRowClick,
  sx,
}) => {
  return (
    <Paper
      sx={[
        {
          height: '100%',
          maxHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      <Box
        sx={{
          p: { xs: 3, md: 3.5 },
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Typography variant="h6">Comparison Matrix</Typography>
        <Typography variant="caption" color="text.secondary">
          Baseline rows are highlighted; click any row to open a detailed
          report.
        </Typography>
      </Box>
      <Box sx={{ flex: 1, minHeight: 0 }} data-testid="qb-matrix">
        <DataGrid
          rows={rows}
          columns={qualityBenchmarkConfig.columns}
          autoHeight={false}
          hideFooterSelectedRowCount
          disableColumnMenu
          onRowClick={(params) => onRowClick(String(params.id))}
          getRowClassName={(params) =>
            String(params.id) === baselineId ? 'qb-baseline-row' : ''
          }
          sx={{
            height: '100%',
            minHeight: 0,
            '& .qb-baseline-row': {
              backgroundColor: 'rgba(25, 118, 210, 0.08)',
            },
          }}
        />
      </Box>
    </Paper>
  );
};
