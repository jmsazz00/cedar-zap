import { Box } from "@mui/material";
import React, { useCallback } from "react";
import { QuestionType } from "../entities/QuestionType";
import { useQuizInputStore } from "../store/QuizInputStore";
import { useQuizStateStore } from "../store/QuizStateStore";
import ChoiceList from "./ChoiceList";
import DropDownList from "./DropDownList";
import WarningNoAnswer from "./WarningNoAnswer";

interface OptionsListProps {
  options: string[];
  correctAnswers: number[];
  type: QuestionType;
  dropdownItems?: string[];
}

const OptionsList: React.FC<OptionsListProps> = ({
  options,
  correctAnswers,
  type,
  dropdownItems,
}) => {
  const questionIndex = useQuizInputStore(
    (state) => state.currentQuestionIndex
  );
  const selectedAnswers = useQuizInputStore(
    (state) => state.answers[questionIndex]
  );
  const setAnswer = useQuizInputStore((state) => state.setAnswer);
  const selectAnswer = useQuizInputStore((state) => state.selectAnswer);
  const toggleAnswer = useQuizInputStore((state) => state.toggleAnswer);
  const showAnswers = useQuizStateStore((state) => state.showAnswers);

  const isMultipleChoice = type === "multiple-choice";
  const isSingleChoice = type === "single-choice";
  const isDropdown = type === "dropdown";

  const handleSelect = useCallback(
    (optionIndex: number, dropdownIndex?: number) => {
      if (isMultipleChoice) toggleAnswer(questionIndex, optionIndex);
      else if (isSingleChoice) setAnswer(questionIndex, optionIndex);
      else if (isDropdown)
        selectAnswer(questionIndex, optionIndex, dropdownIndex!);
    },
    [type, questionIndex, setAnswer, selectAnswer, toggleAnswer]
  );

  return (
    <Box>
      {/* Warning for Unanswered Questions */}
      {showAnswers && (!selectedAnswers || selectedAnswers.length === 0) && (
        <WarningNoAnswer />
      )}
      {isSingleChoice || isMultipleChoice ? (
        <ChoiceList
          options={options}
          selectedAnswers={selectedAnswers || []}
          correctAnswers={correctAnswers}
          isMultipleChoice={isMultipleChoice}
          onSelect={handleSelect}
        />
      ) : isDropdown ? (
        <DropDownList
          options={options}
          dropdownItems={dropdownItems || []}
          selectedAnswers={selectedAnswers || []}
          correctAnswers={correctAnswers}
          onSelect={handleSelect}
        />
      ) : null}
    </Box>
  );
};

export default OptionsList;
