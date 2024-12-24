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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
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
          : "#222",
        color: isCorrect || isSelected ? "common.white" : "text.primary",
      };

    return {
      bgcolor: "#222",
      color: "text.primary",
    };
  };

  const renderIcon = (index: number) => {
    const isCorrect = index === correctAnswer;
    const isSelected = index === selectedAnswer;

    if (showAnswers) {
      if (isCorrect)
        return (
          <CheckCircleIcon
            fontSize="small"
            sx={{ color: "success.light", ml: 1.5, mr: 1.2 }}
          />
        );

      if (isSelected && !isCorrect)
        return (
          <CancelIcon
            fontSize="small"
            sx={{ color: "error.light", ml: 1.5, mr: 1.2 }}
          />
        );
    }

    return (
      <Radio checked={index === selectedAnswer} value={index} color="primary" />
    );
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
        {options.map((option, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => handleSelectAnswer(index)}
              selected={index === selectedAnswer && !showAnswers}
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
              {/* Render Icon (Radio or True/False Icon) */}
              {renderIcon(index)}

              <ListItemText primary={option} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default OptionsList;
