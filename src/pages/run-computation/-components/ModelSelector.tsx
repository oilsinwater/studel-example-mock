import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import { Model } from '../-config/taskflow.types';
import { Surface } from '../../../components/Surface';

interface ModelSelectorProps {
  models: Model[];
  selectedModelId: string | null;
  onSelect: (id: string | null) => void;
}

export const ModelSelector: React.FC<ModelSelectorProps> = ({
  models,
  selectedModelId,
  onSelect,
}) => {
  return (
    <Surface
      dense
      title="Model"
      eyebrow="Simulation engine"
      data-testid="rc-model-selector"
    >
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Choose the computational model to run against the selected dataset.
      </Typography>
      <FormControl fullWidth>
        <InputLabel>Select a model</InputLabel>
        <Select
          value={selectedModelId || ''}
          onChange={(e) => onSelect(e.target.value as string)}
          label="Select a model"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {models.map((m) => (
            <MenuItem key={m.modelId} value={m.modelId}>
              {m.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Surface>
  );
};
