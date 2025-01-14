import React, { useRef } from "react";
import { useQuizStore } from "../store/QuizStore";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import { useSidebarBtnStyles } from "../hooks/useSidebarBtnStyles";

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
  const ref = useRef<HTMLButtonElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const isCurrent = useQuizStore(
    (store) => store.currentQuestionIndex === index
  );
  const hasAnswer = useQuizStore((store) => store.answers[index]?.length > 0);
  const isHighlighted = useQuizStore((store) =>
    store.highlightedQuestions.includes(index)
  );

  const isCorrect = hasAnswer && !falseQuestions.includes(index);

  if (isMobile && isCurrent) {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <Box sx={{ position: "relative" }} ref={ref}>
      <Button
        disableFocusRipple
        variant={
          showAnswers ? "outlined" : isCurrent ? "contained" : "outlined"
        }
        color="primary"
        onClick={() => setCurrentQuestionIndex(index)}
        sx={{
          ...useSidebarBtnStyles(isCurrent, hasAnswer, showAnswers, isCorrect),
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
