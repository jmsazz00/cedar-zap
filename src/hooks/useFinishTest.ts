import { useState } from "react";
import { useQuizStore } from "../store/QuizStore";
import Question from "../entities/Question";

const useFinishTest = (questions: Question[]) => {
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(0);
  const calculateScore = useQuizStore((st) => st.calculateScore);

  const finishTest = () => {
    calculateScore(questions); // Update totalScore in the store
    setScore(useQuizStore.getState().totalScore); // Retrieve the updated score
    setOpen(true); // Show the score pop-up dialog
  };

  const closeDialog = () => setOpen(false);

  return { open, score, finishTest, closeDialog };
};

export default useFinishTest;
