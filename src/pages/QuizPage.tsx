import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import QuizLayout from "../components/QuizLayout";

const QuizPage = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();

  // Temporary quiz instance before backend integration
  const quiz = {
    name: "Physio",
    year: "2023-2024",
    duration: 4800,
  };

  useEffect(() => {
    if (!quizId) {
      navigate("/");
    }
  }, [quizId, navigate]);

  if (!quizId) return null;

  return <QuizLayout quiz={quiz} />;
};

export default QuizPage;
