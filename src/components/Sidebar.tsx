import React from "react";
import { useQuizStore } from "../store/QuizStore";
import { Box, Button } from "@mui/material";
import FinishTestButton from "./FinishTestButton";
import ScoreDialog from "./ScoreDialog";
import useFinishTest from "../hooks/useFinishTest";
import questions from "../data/questions";

const Sidebar: React.FC<{ questionCount: number }> = ({ questionCount }) => {
  const { currentQuestion, setCurrentQuestion, highlightedQuestions, answers } =
    useQuizStore();

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
                variant={currentQuestion === i ? "contained" : "outlined"}
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
                      ? "primary.main"
                      : hasAnswer
                      ? "primary.light"
                      : "background.default",
                  color: currentQuestion === i ? "white" : "text.secondary",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                {i + 1}
                {isHighlighted && (
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
      <Box>
        <FinishTestButton onFinish={finishTest} />
        <ScoreDialog
          onClose={closeDialog}
          open={open}
          score={score}
          maxScore={maxScore}
        />
      </Box>
    </Box>
  );
};

export default Sidebar;
