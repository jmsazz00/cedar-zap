import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import QuizPage from "./pages/QuizPage";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./components/Navbar";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles />
    <Navbar />
    <QuizPage quiz={{ duration: 3600, name: "Gynecology", year: "24-25" }} />
  </ThemeProvider>
);

export default App;
