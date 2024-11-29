import { useState } from "react";
import { useQuizStore } from "../store/QuizStore";
import Question from "../entities/Question";

const useFinishTest = (questions: Question[]) => {
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

  return { open, score, finishTest, closeDialog, maxScore };
};

export default useFinishTest;
