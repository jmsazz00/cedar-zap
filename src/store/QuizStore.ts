import { create } from "zustand";
import Question from "../entities/Question";

interface QuizStore {
  answers: Record<number, number[]>;
  currentQuestionIndex: number;
  highlightedQuestions: number[];
  falseQuestions: number[];
  totalScore: number;
  showAnswers: boolean;
  pauseTimer: boolean;
  setShowAnswers: (value: boolean) => void;
  setAnswer: (index: number, answerIndex: number) => void;
  toggleAnswer: (index: number, answerIndex: number) => void;
  setCurrentQuestionIndex: (index: number) => void;
  toggleHighlight: (index: number) => void;
  calculateScore: (questions: Question[]) => void;
  setPauseTimer: (value: boolean) => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  answers: {},
  currentQuestionIndex: 0,
  highlightedQuestions: [],
  falseQuestions: [],
  totalScore: 0,
  showAnswers: false,
  pauseTimer: false,
  setShowAnswers: (value: boolean) => set({ showAnswers: value }),
  setAnswer: (index, answerIndex) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [index]: answerIndex < 0 ? [] : [answerIndex],
      },
    })),
  toggleAnswer: (index, answerIndex) =>
    set((state) => {
      const currentAnswers = state.answers[index] || [];
      const updatedAnswers = currentAnswers.includes(answerIndex)
        ? currentAnswers.filter((a) => a !== answerIndex)
        : [...currentAnswers, answerIndex];
      return {
        answers: { ...state.answers, [index]: updatedAnswers },
      };
    }),
  setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),
  toggleHighlight: (index) =>
    set((state) => ({
      highlightedQuestions: state.highlightedQuestions.includes(index)
        ? state.highlightedQuestions.filter((i) => i !== index)
        : [...state.highlightedQuestions, index],
    })),
  calculateScore: (questions) =>
    set((state) => {
      const falseQuestions: number[] = [];

      const score = Object.entries(state.answers).reduce(
        (total, [qIndex, selectedAnswers]) => {
          const question = questions[parseInt(qIndex)];
          const correctAnswers = question.correctAnswers;
          const points = question.point;

          // Count correct and incorrect selections
          const correctSelections = selectedAnswers.filter((ans) =>
            correctAnswers.includes(ans)
          ).length;
          const incorrectSelections = selectedAnswers.filter(
            (ans) => !correctAnswers.includes(ans)
          ).length;

          // Calculate effective correct answers after negations
          const effectiveCorrectAnswers = Math.max(
            0,
            correctSelections - incorrectSelections
          );

          // Calculate the score for this question
          const questionScore =
            (effectiveCorrectAnswers / correctAnswers.length) * points;

          // Mark as false if no points were earned
          if (questionScore === 0) falseQuestions.push(parseInt(qIndex));

          return total + questionScore;
        },
        0
      );

      const totalScore = parseFloat(score.toFixed(2));

      return { totalScore, falseQuestions };
    }),
  setPauseTimer: (value: boolean) => set({ pauseTimer: value }),
}));
