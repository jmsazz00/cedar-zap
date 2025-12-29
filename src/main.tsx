import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Box
          sx={{
            flex: 1,
            pt: { xs: "50px", md: "68px" },
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
