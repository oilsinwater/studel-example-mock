import { Stack, Button } from '@mui/material';
import {
  createFileRoute,
  useNavigate,
  useParams,
} from '@tanstack/react-router';
import { PageHeader } from '../../../../components/PageHeader';
import { useRunComputationContext } from '../../-context/ContextProvider';
import { ResultsSummary } from '../../-components/ResultsSummary';
import { OutputDataTable } from '../../-components/OutputDataTable';
import { OutputChart } from '../../-components/OutputChart';
import { Surface } from '../../../../components/Surface';

export const Route = createFileRoute('/run-computation/_layout/results/$runId')(
  {
    component: ComputationResults,
  }
);

function ComputationResults() {
  const { runId } = useParams({
    from: '/run-computation/_layout/results/$runId',
  });
  const { state } = useRunComputationContext();
  const navigate = useNavigate();

  const run = state.runs.find((r) => r.runId === runId);

  const handleExploreOutput = () => {
    if (run?.resultsPath) {
      // This is a mock navigation, assuming the output of a run
      // becomes a new dataset in the explore-data task flow.
      // The id is hardcoded for now.
      navigate({
        to: '/explore-data/detail/$id',
        params: { id: 'exp-2024-03-A' },
      });
    }
  };

  return (
    <Stack spacing={{ xs: 4, md: 5 }}>
      <PageHeader
        pageTitle={`Results for ${runId}`}
        breadcrumbTitle="Computation"
        description="Inspect the output of your simulation run and optionally route the data to other flows."
      />
      <ResultsSummary run={run} />
      <OutputChart resultsPath={run?.resultsPath || null} />
      <OutputDataTable resultsPath={run?.resultsPath || null} />
      <Surface
        dense
        eyebrow="Next step"
        title="Send output to Explore Data"
        sx={{ alignItems: 'flex-start' }}
      >
        <Button
          variant="contained"
          onClick={handleExploreOutput}
          disabled={!run?.resultsPath || run?.status !== 'completed'}
          data-testid="rc-explore-output-button"
        >
          Explore Output Dataset
        </Button>
      </Surface>
    </Stack>
  );
}
