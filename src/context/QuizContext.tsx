import React, { createContext, useContext, useState, ReactNode } from "react";
import { useQuizStore } from "../store/QuizStore";
import Question from "../entities/Question";

interface QuizContextProps {
  open: boolean;
  score: number;
  maxScore: number;
  finishTest: () => void;
  closeDialog: () => void;
}

export const QuizContext = createContext<QuizContextProps | undefined>(
  undefined
);

export const QuizProvider: React.FC<{
  children: ReactNode;
  questions: Question[];
}> = ({ children, questions }) => {
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(0);
  const calculateScore = useQuizStore((st) => st.calculateScore);
  const setFinishTest = useQuizStore((st) => st.setFinishTest);

  const maxScore = questions.reduce((acc, q) => acc + q.point, 0);

  const finishTest = () => {
    calculateScore(questions); // Update totalScore in the store
    setFinishTest(true);
    setScore(useQuizStore.getState().totalScore); // Retrieve the updated score
    setOpen(true);
  };

  const closeDialog = () => setOpen(false);

  return (
    <QuizContext.Provider
      value={{ open, score, maxScore, finishTest, closeDialog }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuizContext must be used within a QuizProvider");
  }
  return context;
};
