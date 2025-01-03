import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  question: string;
  isMultipleChoice: boolean;
  showAnswers: boolean;
}

const QuestionQuery = ({ question, isMultipleChoice, showAnswers }: Props) => {
  console.log("QuestionQuery rendered");
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
