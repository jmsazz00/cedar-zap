import { Box, Typography } from "@mui/material";
import React from "react";
import { useQuizStateStore } from "../store/QuizStateStore";
import { QuestionType } from "../entities/QuestionType";

interface Props {
  question: string;
  type: QuestionType;
}

const QuestionQuery = ({ question, type }: Props) => {
  const showAnswers = useQuizStateStore((state) => state.showAnswers);

  const commonStyles = {
    fontSize: { xs: ".875rem", sm: ".9375rem", md: "1.015rem" },
  };

  return (
    <Box>
      <Typography variant="body1" mb={1.5} sx={commonStyles}>
        {question}
      </Typography>
      {!showAnswers && (
        <Typography
          variant="body1"
          mb={1.5}
          sx={{ ...commonStyles, color: "secondary.main" }}
        >
          Veuillez choisir {type === "multiple-choice" ? "au moins" : ""} une
          réponse
        </Typography>
      )}
    </Box>
  );
};

export default React.memo(QuestionQuery);
