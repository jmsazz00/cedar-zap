import { Box, Typography } from "@mui/material";
import React from "react";
import { useQuizStore } from "../store/QuizStore";

interface Props {
  question: string;
  isMultipleChoice: boolean;
}

const QuestionQuery = ({ question, isMultipleChoice }: Props) => {
  const showAnswers = useQuizStore((state) => state.showAnswers);

  return (
    <Box>
      <Typography variant="body1" mb={2}>
        {question}
      </Typography>
      {!showAnswers && (
        <Typography variant="body1" mb={1} sx={{ color: "secondary.main" }}>
          Veuillez choisir {isMultipleChoice ? "au moins" : ""} une réponse
        </Typography>
      )}
    </Box>
  );
};

export default React.memo(QuestionQuery);
