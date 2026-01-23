import { create } from "zustand";
import SimplifiedQuestion from "../entities/SimplifiedQuestion";
import { useCalculateScore } from "../hooks/useCalculateScore";
import { useQuizInputStore } from "./QuizInputStore";

interface QuizState {
  maxScore: number;
  score: number;
  pauseTimer: boolean;
  correctQuestions: number[];
  tempCorrectQuestions: number[];
  questionsAnswered: number;
  questions: SimplifiedQuestion[];
  scoreDialogOpen: boolean;
  warningDialogOpen: boolean;
  pauseDialogOpen: boolean;
  elapsedTime: number;
  showAnswers: boolean;

  setQuestions: (questions: SimplifiedQuestion[]) => void;
  handleSubmit: (directSubmit?: boolean) => void;
  handlePause: () => void;
  closeScoreDialog: () => void;
  closeWarningDialog: () => void;
  closePauseDialog: () => void;
  finishTest: () => void;
  setElapsedTime: (time: number) => void;
}

export const useQuizStateStore = create<QuizState>((set, get) => ({
  maxScore: 0,
  score: 0,
  pauseTimer: false,
  questions: [],
  correctQuestions: [],
  tempCorrectQuestions: [],
  questionsAnswered: 0,
  scoreDialogOpen: false,
  warningDialogOpen: false,
  pauseDialogOpen: false,
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

    const { totalScore, correctQuestions } = useCalculateScore(
      questions,
      answers
    );

    const questionsAnswered = questions.filter(
      (_, index) => answers[index] && answers[index].length > 0
    ).length;

    set({
      score: totalScore,
      pauseTimer: true,
      tempCorrectQuestions: correctQuestions,
      questionsAnswered,
      scoreDialogOpen: true,
      warningDialogOpen: false,
    });
  },

  handlePause: () => set({ pauseDialogOpen: true, pauseTimer: true }),

  closeWarningDialog: () =>
    set({ warningDialogOpen: false, pauseTimer: false }),

  closeScoreDialog: () => {
    const { tempCorrectQuestions } = get();

    set({
      scoreDialogOpen: false,
      showAnswers: true,
      correctQuestions: tempCorrectQuestions, // Use the stored false questions
      tempCorrectQuestions: [], // Clear temp storage
    });
  },

  closePauseDialog: () => set({ pauseDialogOpen: false, pauseTimer: false }),

  setElapsedTime: (time: number) => set({ elapsedTime: time }),
  setShowAnswers: (value: boolean) => set({ showAnswers: value }),
}));
