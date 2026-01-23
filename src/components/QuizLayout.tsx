import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import Question from "../entities/Question";
import SimplifiedQuestion from "../entities/SimplifiedQuestion"
import Quiz from "../entities/Quiz";
import { useQuizStateStore } from "../store/QuizStateStore";
import DialogsList from "./DialogsList";
import QuestionCard from "./QuestionCard";
import QuizHeader from "./QuizHeader";
import QuizUtils from "./QuizUtils";
import Sidebar from "./Sidebar";

interface QuizLayoutProps {
  quiz: Quiz;
  questions: Question[];
}

const QuizLayout: React.FC<QuizLayoutProps> = ({ quiz, questions }) => {
  const { name, year, duration } = quiz;

  const setQuestions = useQuizStateStore((state) => state.setQuestions);

  const mapToSimplerQuestions = (questions: Question[]): SimplifiedQuestion[] => {
    return questions.map((q) => ({
      index: q.index,
      point: q.point,
      correctAnswers: q.correctAnswers,
      type: q.type,
    }));
  };
  
  useEffect(() => {
    setQuestions(mapToSimplerQuestions(questions));
  }, [questions, setQuestions]);

  return (
    <Box sx={{ display: { md: "flex" } }}>
      <QuizUtils duration={duration} />
      <Sidebar questionCount={questions.length} />
      <Container sx={{ mx: 0, px: 1.5 }}>
        <QuizHeader name={name} year={year} />
        <QuestionCard questions={questions} />
      </Container>
      <DialogsList />
    </Box>
  );
};

export default QuizLayout;
