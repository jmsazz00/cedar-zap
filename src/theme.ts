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
        dark: mode === "dark" ? "#b8912e" : "#a67b2a",
        light: mode === "dark" ? "#d4b456" : "#e6c970",
      },
      background: {
        default: mode === "dark" ? "#121212" : "#fafafa",
        paper: mode === "dark" ? "#1d1d1d" : "#ffffff",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#0a0a0a",
        secondary: mode === "dark" ? "#b0b0b0" : "#5a5a5a",
      },
      grey: {
        A100: mode === "dark" ? "#3a3a3a" : "#f0f0f0",
        A700: mode === "dark" ? "#8e9aaf" : "#424242",
      },
      divider: mode === "dark" ? "#444" : "#e0e0e0",
      action: {
        hover: mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
      },
    },
    typography: {
      fontFamily: '"Poppins", sans-serif',
    },
  });
