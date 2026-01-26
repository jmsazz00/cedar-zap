import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import QuizLayout from "../components/QuizLayout";
import Quiz from "../entities/Quiz";
import Question from "../entities/Question";
import { quizService } from "../services/quizService";

const QuizPage = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!quizId) {
      navigate("/");
      return;
    }

    loadQuizData();
  }, [quizId, navigate]);

  const loadQuizData = async () => {
    if (!quizId) return;

    setIsLoading(true);
    setError(null);

    try {
      const data = await quizService.getQuizWithQuestions(quizId);

      if (!data) {
        setError("Quiz not found");
        navigate("/");
        return;
      }

      setQuiz(data.quiz);
      setQuestions(data.questions);
    } catch (err) {
      const errorMsg =
        err instanceof Error ? err.message : "Failed to load quiz";
      setError(errorMsg);
      console.error("Failed to load quiz:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "linear-gradient(135deg, #121212 0%, #1a1a1a 100%)"
              : "#fafafa",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error || !quiz) {
    navigate("/");
    return null;
  }

  return <QuizLayout quiz={quiz} questions={questions} />;
};

export default QuizPage;
