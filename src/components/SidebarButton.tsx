import React from "react";
import { Box, Button } from "@mui/material";

interface SidebarButtonProps {
  index: number;
  currentQuestion: number;
  setCurrentQuestion: (index: number) => void;
  isHighlighted: boolean;
  hasAnswer: boolean;
  showAnswers: boolean;
  correctAnswer: number;
  userAnswer: number;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  index,
  currentQuestion,
  setCurrentQuestion,
  isHighlighted,
  hasAnswer,
  showAnswers,
  correctAnswer,
  userAnswer,
}) => {
  const isCurrent = currentQuestion === index;
  const isCorrect = userAnswer === correctAnswer;

  return (
    <Box sx={{ position: "relative" }}>
      <Button
        variant={
          showAnswers ? "outlined" : isCurrent ? "contained" : "outlined"
        }
        color="primary"
        onClick={() => setCurrentQuestion(index)}
        sx={{
          height: 48,
          minWidth: 48,
          borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "bold",
          zIndex: 2,
          overflow: "hidden",
          bgcolor: isCurrent
            ? !showAnswers
              ? "primary.dark"
              : "#1a1a1a"
            : hasAnswer && !showAnswers
            ? "secondary.light"
            : "background.default",
          color: showAnswers
            ? isCorrect
              ? "success.dark"
              : "error.dark"
            : isCurrent
            ? "white"
            : "text.secondary",
          borderColor: showAnswers
            ? isCurrent
              ? "var(--currentColor)"
              : isCorrect
              ? "#1b3d2d"
              : "#5c0f0f"
            : "default",
          "&:hover": {
            color: showAnswers ? "default" : "white",
            borderColor: showAnswers ? "var(--currentColor)" : "default",
          },
        }}
      >
        {index + 1}
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
};

export default SidebarButton;
