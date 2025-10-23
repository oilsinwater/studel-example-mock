import { createTheme } from '@mui/material';
import type {} from '@mui/x-data-grid/themeAugmentation';

/**
 * MUI Theme object for setting app-wide and component-wide styles.
 * Specify colors, spacing, fonts, and more.
 * Learn more about theme options: https://mui.com/material-ui/customization/theming/
 */
export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0f0f10',
      paper: '#161617',
    },
    primary: {
      main: '#f1f1f3',
      contrastText: '#0f0f10',
    },
    secondary: {
      main: '#8a8a8f',
      contrastText: '#0f0f10',
    },
    info: {
      main: '#3d78ff',
      contrastText: '#0f0f10',
    },
    success: {
      main: '#2b9c5c',
      contrastText: '#0f0f10',
    },
    warning: {
      main: '#f0a500',
      contrastText: '#0f0f10',
    },
    error: {
      main: '#ff5d5d',
      contrastText: '#0f0f10',
    },
    neutral: {
      main: '#232325',
      light: '#2f2f32',
      dark: '#171719',
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    grey: {
      50: '#111113',
      100: '#141416',
      200: '#1b1b1d',
      300: '#232326',
      400: '#2b2b2f',
      500: '#3a3a3f',
      700: '#6b6b70',
      900: '#c9c9ce',
    },
    divider: '#202022',
    text: {
      primary: '#f5f5f5',
      secondary: '#9a9aa0',
    },
  },
  shape: {
    borderRadius: 6,
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: `"Inter", "Helvetica Neue", Arial, sans-serif`,
    fontSize: 15,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontSize: '3rem',
      fontWeight: 400,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 400,
      letterSpacing: '-0.015em',
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 400,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.2rem',
      fontWeight: 500,
      letterSpacing: '0.01em',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '0.02em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.65,
    },
    body2: {
      fontSize: '0.9rem',
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 500,
      letterSpacing: '0.05em',
      textTransform: 'none',
    },
    overline: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      fontSize: '0.65rem',
      fontWeight: 500,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0f0f10',
          color: '#f5f5f5',
        },
        a: {
          color: 'inherit',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0b0b0c',
          borderBottom: '1px solid #1f1f22',
          color: '#f5f5f5',
          boxShadow: 'none',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 64,
          paddingLeft: 24,
          paddingRight: 24,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: '1.25rem',
          paddingBlock: '0.45rem',
        },
        text: {
          color: '#f5f5f5',
        },
      },
      variants: [
        {
          props: { color: 'neutral' },
          style: {
            backgroundColor: '#1b1b1d',
            border: '1px solid #2a2a2d',
            color: '#f5f5f5',
            borderRadius: 999,
            '&:hover': {
              backgroundColor: '#222225',
            },
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecorationThickness: '1px',
          textUnderlineOffset: '4px',
          color: 'inherit',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
    MuiStack: {
      defaultProps: {
        spacing: 2,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: '#161617',
          border: '1px solid #222226',
          borderRadius: 10,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#111113',
          borderRadius: 12,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#262629',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#f1f1f3',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#f1f1f3',
          },
        },
        input: {
          padding: '14px 16px',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#9a9aa0',
          '&.Mui-focused': {
            color: '#f5f5f5',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#f5f5f5',
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#f1f1f3',
        },
        thumb: {
          border: '2px solid #0f0f10',
          boxShadow: '0 0 0 0 rgba(0,0,0,0)',
        },
        track: {
          border: 'none',
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 0,
          color: '#f5f5f5',
          backgroundColor: '#161617',
          '& .MuiDataGrid-cell:focus-within': {
            outline: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#1b1b1d',
            borderBottom: '1px solid #202022',
          },
          '& .MuiDataGrid-row.Mui-selected': {
            backgroundColor: '#1f1f22',
          },
          '& .MuiDataGrid-overlayWrapper': {
            minHeight: '4rem',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            color: '#bcbcc2',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
          },
        },
      },
    },
  },
});
