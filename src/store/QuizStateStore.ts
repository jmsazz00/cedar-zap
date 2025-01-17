import { create } from "zustand";
import Question from "../entities/Question";
import { useCalculateScore } from "../hooks/useCalculateScore";
import { useQuizInputStore } from "./QuizInputStore";

interface QuizState {
  maxScore: number;
  score: number;
  pauseTimer: boolean;
  falseQuestions: number[];
  tempFalseQuestions: number[];
  questionsAnswered: number;
  questions: Question[];
  scoreDialogOpen: boolean;
  warningDialogOpen: boolean;
  elapsedTime: number;
  showAnswers: boolean;

  setQuestions: (questions: Question[]) => void;
  handleSubmit: (directSubmit?: boolean) => void;
  closeScoreDialog: () => void;
  closeWarningDialog: () => void;
  finishTest: () => void;
  setElapsedTime: (time: number) => void;
}

export const useQuizStateStore = create<QuizState>((set, get) => ({
  maxScore: 0,
  score: 0,
  pauseTimer: false,
  questions: [],
  falseQuestions: [],
  tempFalseQuestions: [],
  questionsAnswered: 0,
  scoreDialogOpen: false,
  warningDialogOpen: false,
  elapsedTime: 0,
  showAnswers: false,

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
    const { answers } = useQuizInputStore.getState();
    const { questions } = get();

    const { totalScore, falseQuestions } = useCalculateScore(
      questions,
      answers
    );

    const questionsAnswered = questions.filter(
      (_, index) => answers[index] && answers[index].length > 0
    ).length;

    set({
      score: totalScore,
      pauseTimer: true,
      tempFalseQuestions: falseQuestions,
      questionsAnswered,
      scoreDialogOpen: true,
      warningDialogOpen: false,
    });
  },

  closeWarningDialog: () =>
    set({ warningDialogOpen: false, pauseTimer: false }),

  closeScoreDialog: () => {
    const { tempFalseQuestions } = get();

    set({
      scoreDialogOpen: false,
      showAnswers: true,
      falseQuestions: tempFalseQuestions, // Use the stored false questions
      tempFalseQuestions: [], // Clear temp storage
    });
  },

  setElapsedTime: (time: number) => set({ elapsedTime: time }),
  setShowAnswers: (value: boolean) => set({ showAnswers: value }),
}));
