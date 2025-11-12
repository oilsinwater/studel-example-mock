import React from 'react';
import { Box, Chip, Stack, Typography } from '@mui/material';
import { useExploreDataContext } from '../-context/ContextProvider';
import { Surface } from '../../../components/Surface';

export const PreviewPanel: React.FC = () => {
  const { state, filteredRows } = useExploreDataContext();
  const basePanelSx = {
    width: '100%',
    maxHeight: { xs: 'none', md: 'calc(100vh - 320px)' },
    minWidth: 0,
  } as const;

  const selectedDataset =
    state.selectedIds.length > 0
      ? filteredRows.find((ds) => ds.id === state.selectedIds[0])
      : null;

  if (!selectedDataset) {
    return (
      <Surface
        title="Preview"
        eyebrow="Selected dataset"
        sx={{
          ...basePanelSx,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <Typography color="text.secondary">
          Select a dataset to preview its details
        </Typography>
      </Surface>
    );
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1048576) return `${Math.round(bytes / 1024)} KB`;
    if (bytes < 1073741824) return `${Math.round(bytes / 1048576)} MB`;
    return `${Math.round(bytes / 1073741824)} GB`;
  };

  return (
    <Surface
      title="Preview"
      eyebrow="Selected dataset"
      sx={{
        ...basePanelSx,
        overflowY: 'auto',
        overflowX: 'hidden',
        flexShrink: 0,
      }}
    >
      <Stack spacing={2.5}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 500 }} gutterBottom>
            {selectedDataset.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {selectedDataset.description}
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Format & Domain
          </Typography>
          <Stack direction="row" spacing={1.5} flexWrap="wrap">
            <Chip label={selectedDataset.format} size="small" />
            <Chip
              label={selectedDataset.domain}
              size="small"
              variant="outlined"
            />
          </Stack>
        </Box>

        <Box>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Dataset Size
          </Typography>
          <Stack spacing={0.5}>
            <Typography variant="body2">
              <strong>Rows:</strong> {selectedDataset.rowCount.toLocaleString()}
            </Typography>
            <Typography variant="body2">
              <strong>Columns:</strong> {selectedDataset.columnCount}
            </Typography>
            <Typography variant="body2">
              <strong>File Size:</strong>{' '}
              {formatFileSize(selectedDataset.fileSize)}
            </Typography>
          </Stack>
        </Box>

        <Box>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Data Quality
          </Typography>
          <Stack spacing={0.5}>
            <Typography variant="body2">
              <strong>Quality Score:</strong>{' '}
              {Math.round(selectedDataset.quality_score * 100)}%
            </Typography>
            <Typography variant="body2">
              <strong>Completeness:</strong> {selectedDataset.completeness}%
            </Typography>
          </Stack>
        </Box>

        <Box>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Last Modified
          </Typography>
          <Typography variant="body2">
            {new Date(selectedDataset.lastModified).toLocaleDateString()}
          </Typography>
        </Box>
      </Stack>
    </Surface>
  );
};
