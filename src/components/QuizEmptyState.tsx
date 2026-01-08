import { Box, Typography } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { useTheme } from "@mui/material/styles";

interface QuizEmptyStateProps {
  query: string;
}

const QuizEmptyState = ({ query }: QuizEmptyStateProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 8,
        px: 2,
      }}
    >
      <SearchOffIcon
        sx={{
          fontSize: { xs: "3rem", md: "4rem" },
          color:
            theme.palette.mode === "dark"
              ? "rgba(92, 107, 192, 0.3)"
              : "rgba(92, 107, 192, 0.2)",
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
        No quizzes found
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
        }}
      >
        No quizzes match "{query}". Try searching for a different code, name, or
        specialty.
      </Typography>
    </Box>
  );
};

export default QuizEmptyState;
