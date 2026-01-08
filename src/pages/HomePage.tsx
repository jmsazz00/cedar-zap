import { Box, Typography, useTheme, Card, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import Quiz from "../entities/Quiz";
import QuizFilter from "../components/QuizFilter";
import QuizEmptyState from "../components/QuizEmptyState";

const HomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [filterQuery, setFilterQuery] = useState("");

  const quizzes: Quiz[] = [
    {
      id: "1",
      code: "GK01",
      name: "General Knowledge",
      specialty: "General",
      year: 2024,
      duration: 600,
      questions: 50,
    },
    {
      id: "2",
      code: "SCI02",
      name: "Physiology",
      specialty: "Medical",
      year: 2024,
      duration: 900,
      questions: 75,
    },
    {
      id: "3",
      code: "HIST03",
      name: "Anatomy Basics",
      specialty: "Medical",
      year: 2023,
      duration: 480,
      questions: 40,
    },
    {
      id: "4",
      code: "PHARM04",
      name: "Pharmacology",
      specialty: "Medical",
      year: 2024,
      duration: 1200,
      questions: 100,
    },
    {
      id: "5",
      code: "PATH05",
      name: "Pathology",
      specialty: "Medical",
      year: 2024,
      duration: 720,
      questions: 60,
    },
    {
      id: "6",
      code: "NEURO06",
      name: "Neurology",
      specialty: "Specialization",
      year: 2023,
      duration: 540,
      questions: 45,
    },
  ];

  const filteredQuizzes = useMemo(() => {
    if (!filterQuery.trim()) return quizzes;

    const query = filterQuery.toLowerCase().trim();

    return quizzes.filter((quiz) => {
      const matchName = quiz.name.toLowerCase().includes(query);
      const matchCode = quiz.code.toLowerCase().includes(query);
      const matchSpecialty = quiz.specialty.toLowerCase().includes(query);
      const matchYear = quiz.year.toString().includes(query);

      return matchName || matchCode || matchSpecialty || matchYear;
    });
  }, [filterQuery, quizzes]);

  const handleQuizClick = (quiz: Quiz) => {
    navigate(`/quiz/${quiz.id}`);
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} min`;
  };

  const getYearLabel = (year: number) => {
    const yearNum = year % 10;
    if (yearNum === 1) return "1st year";
    if (yearNum === 2) return "2nd year";
    if (yearNum === 3) return "3rd year";
    return `${year}th year`;
  };

  return (
    <Box
      sx={{
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #121212 0%, #1a1a1a 100%)"
            : "linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)",
        pt: { xs: 6, md: 8 },
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
              fontSize: { xs: "1rem", md: "1.2rem" },
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Challenge yourself with our curated quizzes. Test your knowledge
            across various subjects and track your progress.
          </Typography>
        </Box>

        <QuizFilter value={filterQuery} onChange={setFilterQuery} />

        {filteredQuizzes.length === 0 ? (
          <QuizEmptyState query={filterQuery} />
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 3.5,
              perspective: "1000px",
            }}
          >
            {filteredQuizzes.map((quiz) => (
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
                  <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
                    <Chip
                      label={quiz.specialty}
                      size="small"
                      variant="outlined"
                      sx={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        borderColor:
                          theme.palette.mode === "dark"
                            ? "rgba(92, 107, 192, 0.5)"
                            : "rgba(92, 107, 192, 0.3)",
                        color:
                          theme.palette.mode === "dark"
                            ? "primary.light"
                            : "primary.main",
                      }}
                    />
                    <Chip
                      label={getYearLabel(quiz.year)}
                      size="small"
                      variant="outlined"
                      sx={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        borderColor:
                          theme.palette.mode === "dark"
                            ? "rgba(203, 161, 53, 0.4)"
                            : "rgba(203, 161, 53, 0.3)",
                        color:
                          theme.palette.mode === "dark"
                            ? "#CBA135"
                            : "#a67b2a",
                      }}
                    />
                  </Box>
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
                      mb: 1,
                    }}
                  >
                    {quiz.questions} questions · {formatDuration(quiz.duration)}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color:
                        theme.palette.mode === "dark"
                          ? "rgba(255, 255, 255, 0.5)"
                          : "rgba(0, 0, 0, 0.5)",
                      fontFamily: "monospace",
                      fontWeight: 500,
                    }}
                  >
                    {quiz.code}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
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
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
