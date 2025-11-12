import React from 'react';
import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { BenchmarkRow } from '../-config/taskflow.types';
import { qualityBenchmarkConfig } from '../-config/taskflow.config';
import { Surface } from '../../../components/Surface';

interface DatasetPickerProps {
  rows: BenchmarkRow[];
  selectedIds: string[];
  onSelectionChange: (ids: string[]) => void;
}

export const DatasetPicker: React.FC<DatasetPickerProps> = ({
  rows,
  selectedIds,
  onSelectionChange,
}) => {
  const panelSx = {
    width: '100%',
    minWidth: 0,
  } as const;

  const pickerHeight = {
    xs: 'calc(100vh - 240px)',
    md: 'calc(100vh - 320px)',
    lg: 'calc(100vh - 360px)',
  } as const;

  const handleSelection = (model: GridRowSelectionModel) => {
    onSelectionChange(model.map(String));
  };

  return (
    <Surface
      eyebrow="Comparison pool"
      title="Select datasets"
      sx={{
        ...panelSx,
        display: 'flex',
        flexDirection: 'column',
        height: pickerHeight,
        maxHeight: pickerHeight,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          height: '100%',
          overflow: 'hidden',
        }}
        data-testid="qb-picker"
      >
        <DataGrid
          rows={rows}
          columns={qualityBenchmarkConfig.columns}
          autoHeight={false}
          checkboxSelection
          disableRowSelectionOnClick={false}
          onRowSelectionModelChange={handleSelection}
          rowSelectionModel={selectedIds}
          pageSizeOptions={[10, 25, 50]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          getRowClassName={(params) =>
            selectedIds.includes(String(params.id)) ? 'qb-selected-row' : ''
          }
          sx={{
            height: '100%',
            minHeight: 0,
            '& .MuiDataGrid-main': {
              height: '100%',
            },
            '& .MuiDataGrid-virtualScroller': {
              overflowY: 'auto',
            },
            '& .qb-selected-row': {
              backgroundColor: 'action.hover',
            },
          }}
        />
      </Box>
    </Surface>
  );
};
