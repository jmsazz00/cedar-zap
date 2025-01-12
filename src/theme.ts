import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5C6BC0",
    },
    secondary: {
      main: "#CBA135",
    },
    background: {
      default: "#121212",
      paper: "#1d1d1d",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
    grey: {
      A100: "#3a3a3a",
      A700: "#8e9aaf",
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});

export default theme;
