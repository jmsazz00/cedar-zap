import { CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./components/Navbar";
import QuizPage from "./pages/QuizPage";
import theme from "./theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Navbar />
      <QuizPage />
    </ThemeProvider>
  </StrictMode>
);
