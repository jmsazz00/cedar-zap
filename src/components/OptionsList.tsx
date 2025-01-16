import React from "react";
import { useQuizInputStore } from "../store/QuizInputStore";
import OptionList from "./OptionList";
import { Box, Typography } from "@mui/material";

interface OptionsListProps {
  options: string[];
  correctAnswers: number[];
  isMultipleChoice: boolean;
}

const OptionsList: React.FC<OptionsListProps> = ({
  options,
  correctAnswers,
  isMultipleChoice,
}) => {
  const questionIndex = useQuizInputStore((state) => state.currentQuestionIndex);
  const selectedAnswers = useQuizInputStore((state) => state.answers[questionIndex]);
  const setAnswer = useQuizInputStore((state) => state.setAnswer);
  const toggleAnswer = useQuizInputStore((state) => state.toggleAnswer);
  const showAnswers = useQuizInputStore((state) => state.showAnswers);

  const handleSelect = (index: number) => {
    if (isMultipleChoice) toggleAnswer(questionIndex, index);
    else setAnswer(questionIndex, index);
  };

  return (
    <Box>
      {/* Warning for Unanswered Questions */}
      {showAnswers && (!selectedAnswers || selectedAnswers.length === 0) && (
        <Typography
          variant="body2"
          color="warning.main"
          sx={{
            mb: 0.8,
            fontWeight: 600,
            fontSize: { xs: "0.8rem", md: "0.9rem" },
          }}
        >
          &#9888;&nbsp; Not Answered
        </Typography>
      )}
      <OptionList
        options={options}
        selectedAnswers={selectedAnswers || []}
        correctAnswers={correctAnswers}
        isMultipleChoice={isMultipleChoice}
        onSelect={handleSelect}
      />
    </Box>
  );
};

export default OptionsList;
