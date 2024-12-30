import React from "react";
import { useQuizStore } from "../store/QuizStore";
import { Box, Divider } from "@mui/material";
import FinishTestButton from "./FinishTestButton";
import ScoreDialog from "./ScoreDialog";
import useFinishTest from "../hooks/useFinishTest";
import questions from "../data/questions";
import SidebarButton from "./SidebarButton";

const Sidebar: React.FC<{ questionCount: number }> = ({ questionCount }) => {
  const currentQuestion = useQuizStore((store) => store.currentQuestion);
  const setCurrentQuestion = useQuizStore((store) => store.setCurrentQuestion);
  const highlightedQuestions = useQuizStore(
    (store) => store.highlightedQuestions
  );
  const answers = useQuizStore((store) => store.answers);
  const showAnswers = useQuizStore((store) => store.showAnswers);
  const falseQuestions = useQuizStore((store) => store.falseQuestions);

  const { open, closeDialog, finishTest, score, maxScore } =
    useFinishTest(questions);

  return (
    <Box
      sx={{
        position: "sticky",
        top: "64px",
        height: "calc(100vh - 64px)",
        minWidth: "fit-content",
        bgcolor: "background.paper",
        padding: 2,
        overflowY: "auto",
        borderRight: "1px solid #444",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 1,
        }}
      >
        {Array.from({ length: questionCount }, (_, i) => {
          const hasAnswer = answers[i]?.length > 0;
          const isCorrect = hasAnswer && !falseQuestions.includes(i);

          return (
            <SidebarButton
              key={i}
              index={i}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              isHighlighted={highlightedQuestions.includes(i)}
              hasAnswer={hasAnswer}
              showAnswers={showAnswers}
              isCorrect={isCorrect}
            />
          );
        })}
      </Box>
      {!showAnswers && (
        <>
          <Divider sx={{ my: 2 }} />
          <Box>
            <FinishTestButton onFinish={finishTest} />
            <ScoreDialog
              onClose={closeDialog}
              open={open}
              score={score}
              maxScore={maxScore}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Sidebar;
