import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import questions from "../data/questions";
import { Quiz } from "../entities/Quiz";
import { useQuizStateStore } from "../store/QuizStateStore";
import DialogsList from "./DialogsList";
import QuestionCard from "./QuestionCard";
import QuizHeader from "./QuizHeader";
import QuizUtils from "./QuizUtils";
import Sidebar from "./Sidebar";

const QuizLayout: React.FC<{ quiz: Quiz }> = ({ quiz }) => {
  const { name, year, duration } = quiz;

  const setQuestions = useQuizStateStore((state) => state.setQuestions);

  useEffect(() => {
    setQuestions(questions);
  }, []);

  return (
    <Box sx={{ display: { md: "flex" }, pt: { xs: "60px", sm: "68px" } }}>
      <QuizUtils duration={duration} />
      <Sidebar questionCount={questions.length} />
      <Container sx={{ mx: 0 }}>
        <QuizHeader name={name} year={year} />
        <QuestionCard questions={questions} />
      </Container>
      <DialogsList />
    </Box>
  );
};

export default QuizLayout;
