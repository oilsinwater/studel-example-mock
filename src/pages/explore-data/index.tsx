import React from 'react';
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { DataGrid, GridRowParams } from '@mui/x-data-grid';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { PageHeader } from '../../components/PageHeader';
import { Surface } from '../../components/Surface';
import {
  ExploreDataProvider,
  useExploreDataContext,
} from './-context/ContextProvider';
import { exploreDataConfig } from './-config/taskflow.config';
import { updateSearch, selectDataset } from './-context/actions';
import { FiltersPanel } from './-components/FiltersPanel';
import { PreviewPanel } from './-components/PreviewPanel';
import { PrimaryActions } from './-components/PrimaryActions';

export const Route = createFileRoute('/explore-data/')({
  component: ExploreDataPage,
});

const ExploreDataContent: React.FC = () => {
  const { state, dispatch, filteredRows } = useExploreDataContext();
  const navigate = useNavigate();
  const [filtersOpen, setFiltersOpen] = React.useState(true);
  const [previewOpen, setPreviewOpen] = React.useState(true);

  const datasetPanelHeight = {
    xs: 'calc(100vh - 280px)',
    md: 'calc(100vh - 320px)',
    lg: 'calc(100vh - 360px)',
  } as const;

  const filterColumns = filtersOpen ? 3 : 0;
  const previewColumns = previewOpen ? 3 : 0;
  const datasetColumns = (() => {
    const remainder = 12 - filterColumns - previewColumns;
    return remainder > 0 ? remainder : 12;
  })();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearch(event.target.value));
  };

  const handleRowClick = (params: GridRowParams) => {
    dispatch(selectDataset(params.id as string));
  };

  const handleViewDetail = () => {
    if (state.selectedIds.length > 0) {
      navigate({ to: `/explore-data/detail/${state.selectedIds[0]}` });
    }
  };

  const handleVisualize = () => {
    if (state.selectedIds.length > 0) {
      navigate({ to: `/explore-data/visualize/${state.selectedIds[0]}` });
    }
  };

  const handleBenchmarkQuality = () => {
    if (state.selectedIds.length > 0) {
      navigate({
        to: '/quality-benchmark',
        search: {
          ids: state.selectedIds.join(','),
          origin: 'explore-data',
          baseline: undefined,
        },
      });
    }
  };

  return (
    <Stack spacing={{ xs: 4, md: 5 }} sx={{ py: { xs: 4, md: 6 } }}>
      <Box data-testid="ed-header">
        <PageHeader
          pageTitle={exploreDataConfig.title}
          description={exploreDataConfig.description}
        />
      </Box>

      <Surface
        dense
        eyebrow="Search"
        title="Find datasets"
        sx={{ width: '100%', maxWidth: { xs: '100%', md: 960 } }}
      >
        <TextField
          data-testid="search-input"
          fullWidth
          label="Search datasets..."
          variant="outlined"
          value={state.searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by name, description, or domain"
        />
      </Surface>
      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        sx={{ alignItems: 'flex-start' }}
      >
        {filtersOpen ? (
          <Grid item xs={12} md={3}>
            <Box data-testid="ed-filters" sx={{ height: '100%' }}>
              <FiltersPanel />
            </Box>
          </Grid>
        ) : null}

        <Grid
          item
          xs={12}
          md={datasetColumns}
          lg={datasetColumns}
          sx={{ display: 'flex' }}
        >
          <Surface
            eyebrow="Dataset library"
            title={`Datasets (${filteredRows.length})`}
            actions={
              <Stack direction="row" spacing={1}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => setFiltersOpen((open) => !open)}
                >
                  {filtersOpen ? 'Hide Filters' : 'Show Filters'}
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => setPreviewOpen((open) => !open)}
                >
                  {previewOpen ? 'Hide Preview' : 'Show Preview'}
                </Button>
              </Stack>
            }
            sx={{
              flex: 1,
              minHeight: 0,
              display: 'flex',
              flexDirection: 'column',
              height: datasetPanelHeight,
              maxHeight: datasetPanelHeight,
              overflow: 'hidden',
            }}
          >
            <Box
              data-testid="ed-grid"
              sx={{ flex: 1, minHeight: 0, display: 'flex', height: '100%' }}
            >
              {state.loading ? (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  <Typography color="text.secondary">
                    Loading datasets…
                  </Typography>
                </Box>
              ) : state.error ? (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  <Typography color="error">{state.error}</Typography>
                </Box>
              ) : (
                <DataGrid
                  rows={filteredRows}
                  columns={exploreDataConfig.columns}
                  pageSizeOptions={[25, 50, 100]}
                  initialState={{
                    pagination: { paginationModel: { pageSize: 25 } },
                  }}
                  onRowClick={handleRowClick}
                  rowSelectionModel={state.selectedIds}
                  onRowSelectionModelChange={(newSelection) => {
                    if (newSelection.length > 0) {
                      dispatch(selectDataset(newSelection[0] as string));
                    }
                  }}
                  autoHeight={false}
                  sx={{
                    flex: 1,
                    height: '100%',
                    minHeight: 0,
                    '& .MuiDataGrid-row': {
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      },
                    },
                  }}
                  slotProps={{
                    row: {
                      'data-testid': 'grid-row',
                    },
                  }}
                />
              )}
            </Box>
          </Surface>
        </Grid>

        {previewOpen ? (
          <Grid item xs={12} md={3} sx={{ alignSelf: 'flex-start' }}>
            <Stack spacing={{ xs: 3, md: 3.5 }} sx={{ minHeight: 0 }}>
              <Box data-testid="ed-preview" sx={{ flex: 1, minHeight: 0 }}>
                <PreviewPanel />
              </Box>
              <Box data-testid="ed-actions">
                <PrimaryActions
                  onViewDetail={handleViewDetail}
                  onVisualize={handleVisualize}
                  onBenchmarkQuality={handleBenchmarkQuality}
                  disabled={state.selectedIds.length === 0}
                />
              </Box>
            </Stack>
          </Grid>
        ) : null}
      </Grid>
    </Stack>
  );
};

function ExploreDataPage() {
  return (
    <ExploreDataProvider>
      <ExploreDataContent />
    </ExploreDataProvider>
  );
}
