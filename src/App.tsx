import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import QuizPage from "./pages/QuizPage";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles />
    <QuizPage />
  </ThemeProvider>
);

export default App;
