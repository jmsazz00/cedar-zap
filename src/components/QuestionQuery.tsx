import { Box, Typography } from "@mui/material";
import React from "react";
import { useQuizInputStore } from "../store/QuizInputStore";

interface Props {
  question: string;
  isMultipleChoice: boolean;
}

const QuestionQuery = ({ question, isMultipleChoice }: Props) => {
  const showAnswers = useQuizInputStore((state) => state.showAnswers);

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
          Veuillez choisir {isMultipleChoice ? "au moins" : ""} une réponse
        </Typography>
      )}
    </Box>
  );
};

export default React.memo(QuestionQuery);
