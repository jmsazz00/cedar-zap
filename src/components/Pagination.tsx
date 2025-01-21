import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useCheckMobileScreen } from "../hooks/useCheckMobileScreen";
import { useQuizInputStore } from "../store/QuizInputStore";
import { useQuizStateStore } from "../store/QuizStateStore";
import FinishTestButton from "./FinishTestButton";

interface PaginationProps {
  totalQuestions: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalQuestions }) => {
  const { isMobile } = useCheckMobileScreen();

  const currentQuestionIndex = useQuizInputStore(
    (state) => state.currentQuestionIndex
  );
  const setCurrentQuestionIndex = useQuizInputStore(
    (state) => state.setCurrentQuestionIndex
  );

  const showAnswers = useQuizStateStore((state) => state.showAnswers);
  const handleSubmit = useQuizStateStore((store) => store.handleSubmit);

  const lastPressTime = useRef(0);
  const throttleDelay = 300;

  const handleKeyPress = (event: KeyboardEvent) => {
    const currentTime = Date.now();

    // If enough time has passed since the last key press, allow the action
    if (
      (event.key === "ArrowRight" || event.key === "ArrowLeft") &&
      currentTime - lastPressTime.current >= throttleDelay
    ) {
      if (event.key === "ArrowRight") {
        if (currentQuestionIndex < totalQuestions - 1)
          setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else if (event.key === "ArrowLeft")
        if (currentQuestionIndex > 0)
          setCurrentQuestionIndex(currentQuestionIndex - 1);

      lastPressTime.current = currentTime;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentQuestionIndex]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button
        variant="outlined"
        disabled={currentQuestionIndex === 0}
        onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
        startIcon={<ArrowLeft />}
        size={isMobile ? "small" : "medium"}
      >
        Prev
      </Button>
      {!showAnswers && (
        <FinishTestButton
          onFinish={() => handleSubmit(false)}
          disabled={!isMobile && currentQuestionIndex !== totalQuestions - 1}
          contained={true}
        />
      )}
      <Button
        variant="outlined"
        disabled={currentQuestionIndex === totalQuestions - 1}
        onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
        endIcon={<ArrowRight />}
        size={isMobile ? "small" : "medium"}
      >
        Next
      </Button>
    </Box>
  );
};

export default React.memo(Pagination);
