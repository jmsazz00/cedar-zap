import { Box, Button } from "@mui/material";
import React, { useLayoutEffect, useRef } from "react";
import { useCheckMobileScreen } from "../hooks/useCheckMobileScreen";
import { useSidebarBtnStyles } from "../hooks/useSidebarBtnStyles";
import { useQuizInputStore } from "../store/QuizInputStore";

interface SidebarButtonProps {
  index: number;
  setCurrentQuestionIndex: (index: number) => void;
  showAnswers: boolean;
  correctQuestions: number[];
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  index,
  setCurrentQuestionIndex,
  showAnswers,
  correctQuestions,
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { isMobile } = useCheckMobileScreen();

  const isCurrent = useQuizInputStore(
    (store) => store.currentQuestionIndex === index
  );
  const hasAnswer = useQuizInputStore(
    (store) => store.answers[index]?.length > 0
  );
  const isHighlighted = useQuizInputStore((store) =>
    store.highlightedQuestions.includes(index)
  );

  const isCorrect = correctQuestions.includes(index);

  useLayoutEffect(() => {
    if (isMobile && isCurrent) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [isCurrent]);

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
