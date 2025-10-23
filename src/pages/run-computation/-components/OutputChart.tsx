import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import Plot from 'react-plotly.js';
import { csv } from 'd3-fetch';
import { Surface } from '../../../components/Surface';

interface OutputChartProps {
  resultsPath: string | null;
}

export const OutputChart: React.FC<OutputChartProps> = ({ resultsPath }) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (resultsPath) {
      csv(resultsPath).then((loadedData) => {
        setData(loadedData);
      });
    }
  }, [resultsPath]);

  if (!resultsPath) {
    return null;
  }

  return (
    <Surface
      eyebrow="Visualization"
      title="Output chart"
      data-testid="rc-output-chart"
    >
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Inspect how yield responds to the simulated temperature curve.
      </Typography>
      <Plot
        data={[
          {
            x: data.map((d) => d.temperature),
            y: data.map((d) => d.yield),
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: '#3d78ff' },
          },
        ]}
        layout={{
          autosize: true,
          height: 400,
          margin: { l: 48, r: 24, t: 48, b: 48 },
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)',
          font: { color: '#f5f5f5' },
          title: 'Yield vs. Temperature',
          xaxis: { title: 'Temperature (°C)', gridcolor: '#2a2a2d' },
          yaxis: { title: 'Yield (%)', gridcolor: '#2a2a2d' },
        }}
        style={{ width: '100%' }}
        useResizeHandler
        config={{ displayModeBar: false }}
      />
    </Surface>
  );
};
