import { GridColDef } from '@mui/x-data-grid';

export interface ExploreDataConfig {
  title: string;
  description: string;
  columns: GridColDef[];
  filters: FilterConfig[];
  dataSource: {
    main: string;
    sample: string;
  };
  routes: {
    [key: string]: string;
  };
}

export interface FilterConfig {
  field: string;
  type: 'select' | 'range' | 'text';
  label: string;
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
}

export const exploreDataConfig: ExploreDataConfig = {
  title: 'Explore Datasets',
  description:
    'Browse, filter, and preview scientific datasets with interactive visualizations',

  columns: [
    {
      field: 'name',
      headerName: 'Dataset Name',
      width: 280,
      minWidth: 260,
      flex: 1.6,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 340,
      minWidth: 320,
      flex: 2.4,
    },
    {
      field: 'rowCount',
      headerName: 'Rows',
      width: 110,
      minWidth: 100,
      maxWidth: 140,
      flex: 0.5,
      type: 'number',
      align: 'right',
      headerAlign: 'right',
    },
    {
      field: 'columnCount',
      headerName: 'Columns',
      width: 110,
      minWidth: 100,
      maxWidth: 140,
      flex: 0.5,
      type: 'number',
      align: 'right',
      headerAlign: 'right',
    },
    {
      field: 'fileSize',
      headerName: 'Size',
      width: 110,
      minWidth: 100,
      maxWidth: 140,
      flex: 0.5,
      align: 'right',
      headerAlign: 'right',
      valueFormatter: (value) => {
        if (value < 1024) return `${value} B`;
        if (value < 1048576) return `${Math.round(value / 1024)} KB`;
        if (value < 1073741824) return `${Math.round(value / 1048576)} MB`;
        return `${Math.round(value / 1073741824)} GB`;
      },
    },
    {
      field: 'format',
      headerName: 'Format',
      width: 90,
      minWidth: 90,
      maxWidth: 120,
      flex: 0.4,
    },
    {
      field: 'domain',
      headerName: 'Domain',
      width: 140,
      minWidth: 120,
      maxWidth: 180,
      flex: 0.7,
    },
    {
      field: 'quality_score',
      headerName: 'Quality',
      width: 110,
      minWidth: 100,
      maxWidth: 140,
      flex: 0.5,
      type: 'number',
      align: 'right',
      headerAlign: 'right',
      valueFormatter: (value) => `${Math.round(value * 100)}%`,
    },
    {
      field: 'completeness',
      headerName: 'Complete',
      width: 110,
      minWidth: 100,
      maxWidth: 140,
      flex: 0.5,
      type: 'number',
      align: 'right',
      headerAlign: 'right',
      valueFormatter: (value) => `${value}%`,
    },
  ],

  filters: [
    {
      field: 'format',
      type: 'select',
      label: 'Format',
      options: ['CSV', 'JSON', 'Parquet', 'HDF5'],
    },
    {
      field: 'domain',
      type: 'select',
      label: 'Domain',
      options: [
        'Chemistry',
        'Physics',
        'Biology',
        'Environmental',
        'Materials',
      ],
    },
    {
      field: 'rowCount',
      type: 'range',
      label: 'Row Count',
      min: 0,
      max: 10000,
      step: 100,
    },
    {
      field: 'quality_score',
      type: 'range',
      label: 'Quality Score',
      min: 0,
      max: 1,
      step: 0.1,
    },
  ],

  dataSource: {
    main: '/data/explore-data-main.csv',
    sample: '/data/explore-data-sample.csv',
  },

  routes: {
    index: 'Explore Datasets',
    detail: 'Dataset Details',
    visualize: 'Dataset Visualization',
  },
};
