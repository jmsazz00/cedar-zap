import React from "react";
import { Button, Box } from "@mui/material";
import { useQuizStore } from "../store/QuizStore";

interface PaginationProps {
  totalQuestions: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalQuestions }) => {
  const { currentQuestion, setCurrentQuestion } = useQuizStore();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button
        variant="outlined"
        disabled={currentQuestion === 0}
        onClick={() => setCurrentQuestion(currentQuestion - 1)}
      >
        Previous
      </Button>
      <Button
        variant="outlined"
        disabled={currentQuestion === totalQuestions - 1}
        onClick={() => setCurrentQuestion(currentQuestion + 1)}
      >
        Next
      </Button>
    </Box>
  );
};

export default Pagination;
