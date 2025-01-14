import React, { useEffect, useRef } from "react";
import { Button, Box, useMediaQuery, useTheme } from "@mui/material";
import { useQuizStore } from "../store/QuizStore";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import FinishTestButton from "./FinishTestButton";
import { useQuizContext } from "../context/QuizContext";

interface PaginationProps {
  totalQuestions: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalQuestions }) => {
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const setCurrentQuestionIndex = useQuizStore(
    (state) => state.setCurrentQuestionIndex
  );
  const showAnswers = useQuizStore((state) => state.showAnswers);

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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { finishTest } = useQuizContext();

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
          onFinish={finishTest}
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
