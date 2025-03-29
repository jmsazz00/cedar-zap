import { Box } from "@mui/material";
import React from "react";
import { QuestionType } from "../entities/QuestionType";
import { useQuizInputStore } from "../store/QuizInputStore";
import { useQuizStateStore } from "../store/QuizStateStore";
import ChoiceList from "./ChoiceList";
import WarningNoAnswer from "./WarningNoAnswer";

interface OptionsListProps {
  options: string[];
  correctAnswers: number[];
  type: QuestionType;
}

const OptionsList: React.FC<OptionsListProps> = ({
  options,
  correctAnswers,
  type,
}) => {
  const questionIndex = useQuizInputStore(
    (state) => state.currentQuestionIndex
  );
  const selectedAnswers = useQuizInputStore(
    (state) => state.answers[questionIndex]
  );
  const setAnswer = useQuizInputStore((state) => state.setAnswer);
  const toggleAnswer = useQuizInputStore((state) => state.toggleAnswer);
  const showAnswers = useQuizStateStore((state) => state.showAnswers);

  const isMultipleChoice = type === "multiple-choice";

  const handleSelect = (index: number) => {
    if (isMultipleChoice) toggleAnswer(questionIndex, index);
    else setAnswer(questionIndex, index);
  };

  return (
    <Box>
      {/* Warning for Unanswered Questions */}
      {showAnswers && (!selectedAnswers || selectedAnswers.length === 0) && (
        <WarningNoAnswer />
      )}
      {type === "multiple-choice" || type === "single-choice" ? (
        <ChoiceList
          options={options}
          selectedAnswers={selectedAnswers || []}
          correctAnswers={correctAnswers}
          isMultipleChoice={isMultipleChoice}
          onSelect={handleSelect}
        />
      ) : null}
    </Box>
  );
};

export default OptionsList;
