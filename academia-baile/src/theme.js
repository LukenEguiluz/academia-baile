import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#E91E63", // Rosa vibrante para la academia de baile
      light: "#F48FB1",
      dark: "#C2185B",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FF9800", // Naranja para complementar
      light: "#FFB74D",
      dark: "#F57C00",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FAFAFA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: "1.75rem",
      },
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: "1.25rem",
      },
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 25,
          padding: "12px 24px",
          fontWeight: 600,
        },
        contained: {
          boxShadow: "0 4px 12px rgba(233, 30, 99, 0.3)",
          "&:hover": {
            boxShadow: "0 6px 16px rgba(233, 30, 99, 0.4)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
            transform: "translateY(-4px)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});
