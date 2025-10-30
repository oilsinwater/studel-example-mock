import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { AppLink } from '../components/AppLink';

export const Route = createFileRoute('/')({
  component: Index,
});

/**
 * Home page component that renders at the root route /
 */
function Index() {
  const theme = useTheme();
  const cards = [
    {
      title: 'Explore Datasets',
      description:
        'Browse, filter, and preview scientific datasets with interactive visualizations across multiple domains.',
      meta: 'Discovery flow',
      to: '/explore-data',
      symbol: '✶',
    },
    {
      title: 'Quality Benchmark',
      description:
        'Compare data readiness scores, anomaly rates, and drift metrics across laboratory datasets before publishing.',
      meta: 'Data condition checks',
      to: '/quality-benchmark',
      symbol: '✳︎',
    },
    {
      title: 'Run Computation',
      description:
        'Execute process simulations and computational models on your datasets with collaborative presets.',
      meta: 'Simulation canvas',
      to: '/run-computation',
      symbol: '✷',
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 4, md: 6 }}>
          <Stack spacing={1.5} alignItems="center" textAlign="center">
            <Typography variant="overline" color="text.secondary">
              Strudel Mock Charts
            </Typography>
            <Typography variant="h1" component="h1">
              Compose scientific task flows with confidence.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: '46rem' }}
            >
              Explore datasets, benchmark quality, and launch computations with
              ready-to-edit STRUDEL templates that keep the focus on analytical
              clarity.
            </Typography>
          </Stack>

          <Box
            sx={{
              borderRadius: 8,
              border: `1px solid ${theme.palette.grey[300]}`,
              borderColor: 'divider',
              background: `linear-gradient(135deg, ${theme.palette.grey[100]} 0%, ${theme.palette.background.paper} 100%)`,
              padding: { xs: 3.5, md: 5 },
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.03)',
            }}
          >
            <Stack spacing={{ xs: 3, md: 4 }}>
              <Stack spacing={1} alignItems="center" textAlign="center">
                <Typography variant="h4" component="h2">
                  Select a direction to begin.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Follow one of these calm pathways to explore, compare, or run
                  models — each channel keeps the interface focused and
                  monochrome.
                </Typography>
              </Stack>

              <Grid container spacing={{ xs: 2.5, md: 3 }}>
                {cards.map((card) => (
                  <Grid item xs={12} md={4} key={card.title}>
                    <AppLink
                      to={card.to}
                      underline="none"
                      color="inherit"
                      sx={{ display: 'block', height: '100%' }}
                    >
                      <Box
                        sx={{
                          borderRadius: 6,
                          border: '1px solid',
                          borderColor: 'rgba(255,255,255,0.06)',
                          backgroundColor: '#0f0f11',
                          height: '100%',
                          padding: { xs: 3, md: 4 },
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 2,
                          justifyContent: 'space-between',
                          transition: 'transform 0.3s ease, border-color 0.3s',
                          position: 'relative',
                          overflow: 'hidden',
                          '&:hover': {
                            transform: 'translateY(-6px)',
                            borderColor: 'primary.main',
                          },
                        }}
                      >
                        <Typography
                          variant="h3"
                          component="div"
                          sx={{
                            fontSize: '3.5rem',
                            lineHeight: 1,
                            color: 'rgba(255,255,255,0.08)',
                          }}
                        >
                          {card.symbol}
                        </Typography>
                        <Stack spacing={1.5}>
                          <Typography
                            variant="h5"
                            component="h3"
                            sx={{ letterSpacing: '0.01em' }}
                          >
                            {card.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {card.description}
                          </Typography>
                        </Stack>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {card.meta}
                        </Typography>
                      </Box>
                    </AppLink>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
