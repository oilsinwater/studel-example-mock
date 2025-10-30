import React from 'react';
import { Stack, TextField, Typography } from '@mui/material';
import { Model } from '../-config/taskflow.types';
import { Surface } from '../../../components/Surface';

interface ParameterFormProps {
  model: Model | undefined;
  parameters: Record<string, any>;
  onParametersChange: (params: Record<string, any>) => void;
}

export const ParameterForm: React.FC<ParameterFormProps> = ({
  model,
  parameters,
  onParametersChange,
}) => {
  const handleParamChange = (id: string, value: any) => {
    onParametersChange({ ...parameters, [id]: value });
  };

  if (!model) {
    return (
      <Surface
        dense
        title="Parameters"
        eyebrow="Model configuration"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
        data-testid="rc-parameter-form"
      >
        <Typography color="text.secondary">
          Select a model to configure its parameters.
        </Typography>
      </Surface>
    );
  }

  return (
    <Surface
      dense
      title="Parameters"
      eyebrow={`Inputs for ${model.name}`}
      data-testid="rc-parameter-form"
    >
      <Stack spacing={2.5}>
        {model.parameters.map((param) => (
          <TextField
            key={param.id}
            label={param.label}
            type={param.type}
            value={parameters[param.id] || ''}
            onChange={(e) => handleParamChange(param.id, e.target.value)}
          />
        ))}
      </Stack>
    </Surface>
  );
};
