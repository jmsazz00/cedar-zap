import React from "react";
import { useQuizStore } from "../store/QuizStore";
import { Box, Button } from "@mui/material";
import FinishTestButton from "./FinishTestButton";
import ScoreDialog from "./ScoreDialog";
import useFinishTest from "../hooks/useFinishTest";
import questions from "../data/questions";

const Sidebar: React.FC<{ questionCount: number }> = ({ questionCount }) => {
  const {
    currentQuestion,
    setCurrentQuestion,
    highlightedQuestions,
    answers,
    showAnswers,
  } = useQuizStore();

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
          const isHighlighted = highlightedQuestions.includes(i);
          const hasAnswer = answers[i] >= 0;

          return (
            <Box key={i} sx={{ position: "relative" }}>
              <Button
                variant={
                  showAnswers
                    ? "outlined"
                    : currentQuestion === i
                    ? "contained"
                    : "outlined"
                }
                color="primary"
                onClick={() => setCurrentQuestion(i)}
                sx={{
                  height: 48,
                  minWidth: 48,
                  borderRadius: 2,
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  zIndex: 2,
                  overflow: "hidden",
                  bgcolor:
                    currentQuestion === i
                      ? !showAnswers
                        ? "primary.main"
                        : "#1a1a1a"
                      : hasAnswer && !showAnswers
                      ? "primary.light"
                      : "background.default",
                  color: showAnswers
                    ? answers[i] === questions[i].correctAnswer
                      ? "success.dark"
                      : "error.dark"
                    : currentQuestion === i
                    ? "white"
                    : "text.secondary",
                  borderColor: showAnswers
                    ? currentQuestion === i
                      ? "var(--currentColor)"
                      : answers[i] === questions[i].correctAnswer
                      ? "#1b3d2d"
                      : "#5c0f0f"
                    : "default",
                  "&:hover": {
                    color: showAnswers ? "default" : "white",
                    borderColor: showAnswers
                      ? "var(--currentColor)"
                      : "default",
                  },
                }}
              >
                {i + 1}
                {!showAnswers && isHighlighted && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 4,
                      right: -6,
                      width: "55%",
                      height: "5px",
                      bgcolor: "secondary.main",
                      transform: "rotate(45deg)",
                      zIndex: 1,
                    }}
                  />
                )}
              </Button>
            </Box>
          );
        })}
      </Box>
      {!showAnswers && (
        <Box>
          <FinishTestButton onFinish={finishTest} />
          <ScoreDialog
            onClose={closeDialog}
            open={open}
            score={score}
            maxScore={maxScore}
          />
        </Box>
      )}
    </Box>
  );
};

export default Sidebar;
