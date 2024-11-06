import { Box, Container } from "@mui/material";
import React from "react";
import QuestionCard from "../components/QuestionCard";
import Sidebar from "../components/Sidebar";
import questions from "../data/questions";
import { useQuizStore } from "../store/QuizStore";

const QuizPage: React.FC = () => {
  const { currentQuestion } = useQuizStore();
  const questionData = questions[currentQuestion];

  const questionQuery = {
    index: currentQuestion,
    question: questionData.question,
    options: questionData.options,
    point: questionData.point,
    correctAnswer: questionData.correctAnswer,
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar questionCount={questions.length} />
      <Container
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.default",
        }}
      >
        <QuestionCard
          totalQuestions={questions.length}
          questionQuery={questionQuery}
        />
      </Container>
    </Box>
  );
};

export default QuizPage;
