import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#bb86fc", // primary mauve
    },
    secondary: {
      main: "#4db6e2", // muted blue
      light: "#3a3a3a", // slate gray
      dark: "#8e9aaf", // dark gray
    },
    background: {
      default: "#121212",
      paper: "#1d1d1d",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});

export default theme;
