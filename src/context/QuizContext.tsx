import { createContext, ReactNode, useContext, useState } from "react";
import Question from "../entities/Question";
import { useQuizStore } from "../store/QuizStore";
import { useCalculateScore } from "../hooks/useCalculateScore";

interface QuizContextProps {
  maxScore: number;
  score: number;
  pauseTimer: boolean;
  falseQuestions: number[];

  scoreDialogOpen: boolean;
  warningDialogOpen: boolean;
  handleSubmit: (directSubmit?: boolean) => void;
  closeScoreDialog: () => void;
  closeWarningDialog: () => void;
}

export const QuizContext = createContext<QuizContextProps | undefined>(
  undefined
);

export const QuizProvider: React.FC<{
  children: ReactNode;
  questions: Question[];
}> = ({ children, questions }) => {
  const [scoreDialogOpen, setScoreDialogOpen] = useState(false);
  const [warningDialogOpen, setWarningDialogOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [pauseTimer, setPauseTimer] = useState(false);
  const [falseQuestions, setFalseQuestions] = useState<number[]>([]);

  const answers = useQuizStore((st) => st.answers);
  const setShowAnswers = useQuizStore((st) => st.setShowAnswers);

  const maxScore = questions.reduce((acc, q) => acc + q.point, 0);

  const calculateScore = () => {
    const { totalScore, falseQuestions } = useCalculateScore(
      questions,
      answers
    );

    setScore(totalScore);
    setFalseQuestions(falseQuestions);
  };

  const handleSubmit = (directSubmit?: boolean) => {
    if (directSubmit) {
      finishTest();
      return;
    }

    const unansweredQuestions = questions.filter(
      (_, index) => !answers[index] || answers[index].length === 0
    );

    if (!warningDialogOpen && unansweredQuestions.length > 0) {
      setWarningDialogOpen(true);
      setPauseTimer(true); // Show warning first
    } else finishTest();
  };

  const finishTest = () => {
    setWarningDialogOpen(false);
    calculateScore(); // Update totalScore in the store
    setPauseTimer(true);
    setScoreDialogOpen(true); // Show score dialog
  };

  const closeWarningDialog = () => {
    setWarningDialogOpen(false);
    setPauseTimer(false);
  };

  const closeScoreDialog = () => {
    setScoreDialogOpen(false);
    setShowAnswers(true);
  };

  return (
    <QuizContext.Provider
      value={{
        maxScore,
        score,
        pauseTimer,
        falseQuestions,
        scoreDialogOpen,
        warningDialogOpen,
        handleSubmit,
        closeScoreDialog,
        closeWarningDialog,
      }}
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
