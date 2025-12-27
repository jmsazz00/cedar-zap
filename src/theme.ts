import { createTheme } from "@mui/material/styles";

export const createAppTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#5C6BC0",
        dark: mode === "dark" ? "#3f51b5" : "#3949ab",
        light: mode === "dark" ? "#7986cb" : "#9fa8da",
      },
      secondary: {
        main: "#CBA135",
        dark: "#b8912e",
        light: "#d4b456",
      },
      background: {
        default: mode === "dark" ? "#121212" : "#f5f5f5",
        paper: mode === "dark" ? "#1d1d1d" : "#ffffff",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#1a1a1a",
        secondary: mode === "dark" ? "#b0b0b0" : "#666666",
      },
      grey: {
        A100: mode === "dark" ? "#3a3a3a" : "#e0e0e0",
        A700: mode === "dark" ? "#8e9aaf" : "#616161",
      },
      divider: mode === "dark" ? "#444" : "#e0e0e0",
    },
    typography: {
      fontFamily: '"Poppins", sans-serif',
    },
  });
