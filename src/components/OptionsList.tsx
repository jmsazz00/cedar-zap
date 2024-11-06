import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Radio,
} from "@mui/material";
import { useQuizStore } from "../store/QuizStore";

interface OptionsListProps {
  questionIndex: number;
  options: string[];
}

const OptionsList: React.FC<OptionsListProps> = ({
  questionIndex,
  options,
}) => {
  const selectedAnswer = useQuizStore((state) => state.answers[questionIndex]);
  const setAnswer = useQuizStore((state) => state.setAnswer);

  const handleSelectAnswer = (optionIndex: number) => {
    setAnswer(questionIndex, optionIndex);
  };

  return (
    <List>
      {options.map((option, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton
            onClick={() => handleSelectAnswer(index)}
            selected={selectedAnswer === index}
            sx={{
              bgcolor: "background.paper",
              my: 0.7,
              borderRadius: 1,
              pl: 0,
            }}
          >
            <Radio
              checked={selectedAnswer === index}
              onChange={() => handleSelectAnswer(index)}
              value={index}
              color="primary"
            />
            <ListItemText primary={option} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default OptionsList;
