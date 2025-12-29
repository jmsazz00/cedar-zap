import { Box, Typography, useTheme, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Quiz {
  id: string;
  name: string;
  year: number;
  duration: number;
  questions: number;
}

const HomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const quizzes: Quiz[] = [
    {
      id: "1",
      name: "General Knowledge",
      year: 2024,
      duration: 600,
      questions: 50,
    },
    {
      id: "2",
      name: "Science Basics",
      year: 2024,
      duration: 900,
      questions: 75,
    },
    {
      id: "3",
      name: "History Facts",
      year: 2023,
      duration: 480,
      questions: 40,
    },
    {
      id: "4",
      name: "Mathematics",
      year: 2024,
      duration: 1200,
      questions: 100,
    },
    {
      id: "5",
      name: "English Language",
      year: 2024,
      duration: 720,
      questions: 60,
    },
    {
      id: "6",
      name: "Geography",
      year: 2023,
      duration: 540,
      questions: 45,
    },
  ];

  const handleQuizClick = (quiz: Quiz) => {
    navigate(
      `/quiz?name=${encodeURIComponent(quiz.name)}&duration=${quiz.duration}&year=${quiz.year}`
    );
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} min`;
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #121212 0%, #1a1a1a 100%)"
            : "linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)",
        pt: { xs: 8, md: 10 },
        pb: 6,
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(135deg, #5C6BC0 0%, #CBA135 100%)"
                  : "linear-gradient(135deg, #3949ab 0%, #a67b2a 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            Welcome to Cedar Zap
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? "text.secondary"
                  : "rgba(0, 0, 0, 0.7)",
              fontWeight: 400,
              fontSize: { xs: "1rem", md: "1.25rem" },
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Challenge yourself with our curated quizzes. Test your knowledge
            across various subjects and track your progress.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
            perspective: "1000px",
          }}
        >
          {quizzes.map((quiz) => (
            <Card
              key={quiz.id}
              onClick={() => handleQuizClick(quiz)}
              sx={{
                p: 3,
                cursor: "pointer",
                background:
                  theme.palette.mode === "dark"
                    ? "rgba(29, 29, 29, 0.8)"
                    : "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                border: "1px solid",
                borderColor:
                  theme.palette.mode === "dark"
                    ? "rgba(92, 107, 192, 0.2)"
                    : "rgba(92, 107, 192, 0.15)",
                borderRadius: 2,
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transform: "translateY(0px) rotateX(0deg)",
                "&:hover": {
                  transform: "translateY(-12px) rotateX(5deg)",
                  borderColor:
                    theme.palette.mode === "dark"
                      ? "rgba(92, 107, 192, 0.6)"
                      : "rgba(92, 107, 192, 0.4)",
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "0 20px 40px rgba(92, 107, 192, 0.15)"
                      : "0 20px 40px rgba(92, 107, 192, 0.1)",
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "220px",
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color:
                      theme.palette.mode === "dark"
                        ? "primary.light"
                        : "primary.main",
                    mb: 1,
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                  }}
                >
                  {quiz.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color:
                      theme.palette.mode === "dark"
                        ? "text.secondary"
                        : "text.secondary",
                    mb: 2,
                  }}
                >
                  {quiz.questions} questions · {formatDuration(quiz.duration)}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pt: 2,
                  borderTop: "1px solid",
                  borderColor:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.05)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    color:
                      theme.palette.mode === "dark"
                        ? "secondary.light"
                        : "secondary.dark",
                    fontWeight: 600,
                  }}
                >
                  {quiz.year}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    color: "primary.main",
                    fontWeight: 600,
                  }}
                >
                  Start Quiz →
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
