import React, { useRef, useEffect, useState } from "react";
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

  const [hoveredOption, setHoveredOption] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.focus();
    }
    setHoveredOption(null);
  }, [questionIndex]);

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
      bgcolor: hoveredOption === index ? "#3f3f3f" : "#222",
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

  const handleKeyPress = (event: React.KeyboardEvent) => {
    // Prevent navigation keys from affecting radio button focus
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      return;
    }

    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      const nextIndex =
        event.key === "ArrowUp"
          ? Math.max(0, (hoveredOption ?? selectedAnswer ?? 0) - 1)
          : Math.min(
              options.length - 1,
              (hoveredOption ?? selectedAnswer ?? -1) + 1
            );
      setHoveredOption(nextIndex);

      event.preventDefault();
    }

    if (event.key === "Enter" && hoveredOption !== null) {
      handleSelectAnswer(hoveredOption);
      setHoveredOption(null);
    }
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

      <List
        ref={listRef}
        onKeyDown={handleKeyPress}
        tabIndex={0} // Make the list focusable
        sx={{ outline: "none" }}
      >
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
              onMouseEnter={() => setHoveredOption(index)}
              onMouseLeave={() => setHoveredOption(null)}
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
