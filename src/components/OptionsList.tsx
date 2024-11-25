import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Radio,
  Typography,
  Box,
} from "@mui/material";
import { useQuizStore } from "../store/QuizStore";

interface OptionsListProps {
  questionIndex: number;
  options: string[];
  correctAnswer: number;
  showAnswers: boolean;
}

const OptionsList: React.FC<OptionsListProps> = ({
  questionIndex,
  options,
  correctAnswer,
  showAnswers,
}) => {
  const selectedAnswer = useQuizStore((state) => state.answers[questionIndex]);
  const setAnswer = useQuizStore((state) => state.setAnswer);

  const handleSelectAnswer = (optionIndex: number) => {
    setAnswer(questionIndex, optionIndex);
  };

  const getOptionStyles = (index: number) => {
    const isCorrect = index === correctAnswer;
    const isSelected = index === selectedAnswer;

    if (showAnswers)
      return {
        bgcolor: isCorrect
          ? "success.dark"
          : isSelected
          ? "error.dark"
          : "background.paper",
        color: isCorrect || isSelected ? "common.white" : "text.primary",
      };

    return {
      bgcolor: "background.paper",
      color: "text.primary",
    };
  };

  return (
    <Box>
      {/* Warning for Unanswered Questions */}
      {showAnswers && selectedAnswer === undefined && (
        <Typography
          variant="body2"
          color="warning.main"
          sx={{ my: 0.5, fontWeight: 600 }}
        >
          &#9888;&nbsp; Not Answered
        </Typography>
      )}

      <List>
        {options.map((option, index) => {
          const isCorrect = index === correctAnswer;
          const isSelected = index === selectedAnswer;

          return (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => handleSelectAnswer(index)}
                selected={isSelected && !showAnswers}
                disabled={showAnswers}
                sx={{
                  ...getOptionStyles(index),
                  my: 0.7,
                  borderRadius: 1,
                  pl: 0,
                  "&.Mui-disabled": {
                    opacity: 0.85,
                  },
                }}
              >
                <Radio
                  checked={isSelected || (showAnswers && isCorrect)}
                  value={index}
                  color={
                    showAnswers ? (isCorrect ? "success" : "error") : "primary"
                  }
                  disabled={showAnswers}
                />
                <ListItemText primary={option} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default OptionsList;
