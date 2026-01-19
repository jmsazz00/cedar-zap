import { Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useTheme } from "@mui/material/styles";

interface QuizDataErrorProps {
  onRetry: () => void;
}

const QuizDataError = ({ onRetry }: QuizDataErrorProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 8,
        px: 2,
      }}
    >
      <ErrorOutlineIcon
        sx={{
          fontSize: { xs: "3rem", md: "4rem" },
          color:
            theme.palette.mode === "dark"
              ? "rgba(211, 47, 47, 0.4)"
              : "rgba(211, 47, 47, 0.3)",
          mb: 2,
        }}
      />
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          mb: 1,
          color:
            theme.palette.mode === "dark"
              ? "text.primary"
              : "text.primary",
        }}
      >
        Unable to load quizzes
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color:
            theme.palette.mode === "dark"
              ? "text.secondary"
              : "text.secondary",
          maxWidth: "400px",
          mx: "auto",
          lineHeight: 1.6,
          mb: 3,
        }}
      >
        We encountered an issue loading the quiz list. Please try again.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={onRetry}
        sx={{
          textTransform: "none",
          fontSize: "1rem",
          fontWeight: 600,
          px: 3,
          py: 1.2,
        }}
      >
        Retry
      </Button>
    </Box>
  );
};

export default QuizDataError;
