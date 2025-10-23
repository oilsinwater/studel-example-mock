import React from 'react';
import { Button, Stack } from '@mui/material';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { PageHeader } from '../../../components/PageHeader';
import { Surface } from '../../../components/Surface';
import { useRunComputationContext } from '../-context/ContextProvider';
import { RunHistoryTable } from '../-components/RunHistoryTable';
import { runComputationConfig } from '../-config/taskflow.config';

export const Route = createFileRoute('/run-computation/_layout/')({
  component: RunComputationIndex,
});

function RunComputationIndex() {
  const { state } = useRunComputationContext();
  const navigate = useNavigate();

  const handleNewRun = () => {
    navigate({ to: '/run-computation/new' });
  };

  const handleRowClick = (runId: string) => {
    navigate({ to: '/run-computation/results/$runId', params: { runId } });
  };

  return (
    <Stack spacing={4}>
      <PageHeader
        pageTitle={runComputationConfig.title}
        description="Select a process dataset, choose a simulation model, configure its parameters, and execute a computation. Monitor the run and analyze the resulting output data."
      />
      <RunHistoryTable runs={state.runs} onRowClick={handleRowClick} />
      <Surface
        dense
        eyebrow="Create"
        title="Launch a new computation"
        sx={{ alignItems: 'flex-start' }}
      >
        <Button
          variant="contained"
          onClick={handleNewRun}
          data-testid="rc-new-run-button"
        >
          New Run
        </Button>
      </Surface>
    </Stack>
  );
}
