import { create } from "zustand";

interface QuizInput {
  answers: Record<number, number[]>;
  currentQuestionIndex: number;
  highlightedQuestions: number[];

  setAnswer: (index: number, answerIndex: number) => void;
  toggleAnswer: (index: number, answerIndex: number) => void;
  setCurrentQuestionIndex: (index: number) => void;
  toggleHighlight: (index: number) => void;
}

export const useQuizInputStore = create<QuizInput>((set) => ({
  answers: {},
  currentQuestionIndex: 0,
  highlightedQuestions: [],
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
}));
