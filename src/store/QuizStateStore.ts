import { create } from "zustand";
import { useQuizInputStore } from "./QuizInputStore";
import { useCalculateScore } from "../hooks/useCalculateScore";
import Question from "../entities/Question";

interface QuizState {
  maxScore: number;
  score: number;
  pauseTimer: boolean;
  falseQuestions: number[];
  questions: Question[];
  scoreDialogOpen: boolean;
  warningDialogOpen: boolean;

  setQuestions: (questions: Question[]) => void;
  handleSubmit: (directSubmit?: boolean) => void;
  closeScoreDialog: () => void;
  closeWarningDialog: () => void;
  finishTest: () => void;
}

export const useQuizStateStore = create<QuizState>((set, get) => ({
  maxScore: 0,
  score: 0,
  pauseTimer: false,
  questions: [],
  falseQuestions: [],
  scoreDialogOpen: false,
  warningDialogOpen: false,

  setQuestions: (questions) => {
    const maxScore = questions.reduce((acc, q) => acc + q.point, 0);
    set({ maxScore, questions });
  },

  handleSubmit: (directSubmit = false) => {
    const { questions, warningDialogOpen, finishTest } = get();
    const answers = useQuizInputStore.getState().answers;

    if (directSubmit) {
      finishTest();
      return;
    }

    const unansweredQuestions = questions.filter(
      (_, index) => !answers[index] || answers[index].length === 0
    );

    if (!warningDialogOpen && unansweredQuestions.length > 0)
      set({ warningDialogOpen: true, pauseTimer: true });
    else finishTest();
  },

  finishTest: () => {
    const { answers, setShowAnswers } = useQuizInputStore.getState();

    const { totalScore, falseQuestions } = useCalculateScore(
      get().questions,
      answers
    );

    setShowAnswers(true);

    set({
      score: totalScore,
      falseQuestions,
      pauseTimer: true,
      scoreDialogOpen: true,
      warningDialogOpen: false,
    });
  },

  closeWarningDialog: () =>
    set({ warningDialogOpen: false, pauseTimer: false }),

  closeScoreDialog: () => {
    set({ scoreDialogOpen: false });
  },
}));
