import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import questions from "../data/questions";
import Question from "../entities/Question";
import Quiz from "../entities/Quiz";
import { useQuizStateStore } from "../store/QuizStateStore";
import DialogsList from "./DialogsList";
import QuestionCard from "./QuestionCard";
import QuizHeader from "./QuizHeader";
import QuizUtils from "./QuizUtils";
import Sidebar from "./Sidebar";

const QuizLayout: React.FC<{ quiz: Quiz }> = ({ quiz }) => {
  const { name, year, duration } = quiz;

  const setQuestions = useQuizStateStore((state) => state.setQuestions);

  const allQuestions = questions as Question[];

  useEffect(() => {
    setQuestions(allQuestions);
  }, []);

  return (
    <Box sx={{ display: { md: "flex" } }}>
      <QuizUtils duration={duration} />
      <Sidebar questionCount={questions.length} />
      <Container sx={{ mx: 0, px: 1.5 }}>
        <QuizHeader name={name} year={year} />
        <QuestionCard questions={allQuestions} />
      </Container>
      <DialogsList />
    </Box>
  );
};

export default QuizLayout;
