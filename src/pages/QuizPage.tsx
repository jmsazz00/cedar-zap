import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import QuizLayout from "../components/QuizLayout";
import Quiz from "../entities/Quiz";

const QuizPage = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();

  // Temporary quiz instance before backend integration
  const quiz: Quiz = {
    id: quizId || "physio-1",
    code: "PX01",
    name: "Physio",
    specialty: "Med",
    specialtyYear: 2,
    year: "23-24",
    duration: 4800,
    questions: 80,
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
