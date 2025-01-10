import React from "react";
import { useQuizStore } from "../store/QuizStore";
import { Box, Button } from "@mui/material";

interface SidebarButtonProps {
  index: number;
  setCurrentQuestionIndex: (index: number) => void;
  showAnswers: boolean;
  falseQuestions: number[];
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  index,
  setCurrentQuestionIndex,
  showAnswers,
  falseQuestions,
}) => {
  const isCurrent = useQuizStore(
    (store) => store.currentQuestionIndex === index
  );
  const hasAnswer = useQuizStore((store) => store.answers[index]?.length > 0);
  const isHighlighted = useQuizStore((store) =>
    store.highlightedQuestions.includes(index)
  );

  const isCorrect = hasAnswer && !falseQuestions.includes(index);

  const getBgColor = () => {
    if (isCurrent) return !showAnswers ? "primary.dark" : "background.default";
    if (hasAnswer && !showAnswers) return "secondary.light";
    return "background.default";
  };

  const getColor = () => {
    if (showAnswers) return isCorrect ? "success.dark" : "error.dark";
    return isCurrent ? "white" : "text.secondary";
  };

  const getBorderColor = () => {
    if (!showAnswers) return "default";
    return isCurrent
      ? "var(--currentColor)"
      : isCorrect
      ? "#1b3d2d"
      : "#5c0f0f";
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Button
        disableFocusRipple
        variant={
          showAnswers ? "outlined" : isCurrent ? "contained" : "outlined"
        }
        color="primary"
        onClick={() => setCurrentQuestionIndex(index)}
        sx={{
          height: { xs: 42, sm: 45, md: 48 },
          minWidth: { xs: 42, sm: 45, md: 48 },
          borderRadius: { xs: 1.5, md: 2 },
          fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.875rem" },
          fontWeight: "bold",
          zIndex: 2,
          overflow: "hidden",
          bgcolor: getBgColor(),
          color: getColor(),
          borderColor: getBorderColor(),
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
