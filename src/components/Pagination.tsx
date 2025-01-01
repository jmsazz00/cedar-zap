import React, { useEffect, useRef } from "react";
import { Button, Box } from "@mui/material";
import { useQuizStore } from "../store/QuizStore";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

interface PaginationProps {
  totalQuestions: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalQuestions }) => {
  const { currentQuestionIndex, setCurrentQuestionIndex } = useQuizStore();

  // Ref to store the time of the last key press
  const lastPressTime = useRef(0);

  // Throttle delay in milliseconds
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
        if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1);

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
      >
        Previous
      </Button>
      <Button
        variant="outlined"
        disabled={currentQuestionIndex === totalQuestions - 1}
        onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
        endIcon={<ArrowRight />}
      >
        Next
      </Button>
    </Box>
  );
};

export default Pagination;
