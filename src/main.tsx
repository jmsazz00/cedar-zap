import { CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./components/Navbar";
import QuizPage from "./pages/QuizPage";
import { createAppTheme } from "./theme";
import { useThemeStore } from "./store/ThemeStore";

const App = () => {
  const mode = useThemeStore((state) => state.mode);
  const theme = createAppTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Navbar />
      <QuizPage />
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
