import { Box, Container } from "@mui/material";
import React from "react";
import QuestionCard from "../components/QuestionCard";
import Sidebar from "../components/Sidebar";
import questions from "../data/questions";
import { useQuizStore } from "../store/QuizStore";
import QuizTimer from "../components/QuizTimer";
import useFinishTest from "../hooks/useFinishTest";
import ScoreDialog from "../components/ScoreDialog";

const QuizPage: React.FC = () => {
  const { currentQuestion } = useQuizStore();
  const questionData = questions[currentQuestion];

  const { finishTest, maxScore, open, score, closeDialog } =
    useFinishTest(questions);

  const questionQuery = {
    index: currentQuestion,
    question: questionData.question,
    options: questionData.options,
    point: questionData.point,
    correctAnswer: questionData.correctAnswer,
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <QuizTimer duration={3500} onTimeUp={finishTest} />
      <Sidebar questionCount={questions.length} />
      <Container sx={{ pt: 4 }}>
        <QuestionCard
          totalQuestions={questions.length}
          questionQuery={questionQuery}
        />
      </Container>
      <ScoreDialog
        open={open}
        score={score}
        maxScore={maxScore}
        onClose={closeDialog}
      />
    </Box>
  );
};

export default QuizPage;
