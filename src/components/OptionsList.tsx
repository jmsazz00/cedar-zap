import React from "react";
import { useQuizStore } from "../store/QuizStore";
import OptionList from "./OptionList";
import { Box, Typography } from "@mui/material";

interface OptionsListProps {
  questionIndex: number;
  options: string[];
  correctAnswers: number[];
  isMultipleChoice: boolean;
  showAnswers: boolean;
}

const OptionsList: React.FC<OptionsListProps> = ({
  questionIndex,
  options,
  correctAnswers,
  isMultipleChoice,
  showAnswers,
}) => {
  const selectedAnswers = useQuizStore((state) => state.answers[questionIndex]);
  const setAnswer = useQuizStore((state) => state.setAnswer);
  const toggleAnswer = useQuizStore((state) => state.toggleAnswer);

  const handleSelect = (index: number) => {
    if (isMultipleChoice) toggleAnswer(questionIndex, index);
    else setAnswer(questionIndex, index);
  };

  return (
    <Box>
      {/* Warning for Unanswered Questions */}
      {showAnswers && !selectedAnswers && (
        <Typography
          variant="body2"
          color="warning.main"
          sx={{ my: 0.5, fontWeight: 600 }}
        >
          &#9888;&nbsp; Not Answered
        </Typography>
      )}
      <OptionList
        options={options}
        selectedAnswers={selectedAnswers || []}
        correctAnswers={correctAnswers}
        showAnswers={showAnswers}
        isMultipleChoice={isMultipleChoice}
        onSelect={handleSelect}
      />
    </Box>
  );
};

export default OptionsList;
