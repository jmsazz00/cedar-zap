import { create } from "zustand";
import Question from "../entities/Question";

interface QuizStore {
  answers: Record<number, number>; // store the answer as the index of selected option
  currentQuestion: number;
  highlightedQuestions: number[];
  totalScore: number;
  showAnswers: boolean,
  setShowAnswers: (value: boolean) => void,
  setAnswer: (index: number, answerIndex: number) => void;
  setCurrentQuestion: (index: number) => void;
  toggleHighlight: (index: number) => void;
  calculateScore: (questions: Question[]) => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  answers: {},
  currentQuestion: 0,
  highlightedQuestions: [],
  totalScore: 0,
  showAnswers: false,
  setShowAnswers: (value: boolean) => set({ showAnswers: value }),
  setAnswer: (index, answerIndex) =>
    set((state) => ({
      answers: { ...state.answers, [index]: answerIndex },
    })),
  setCurrentQuestion: (index) => set({ currentQuestion: index }),
  toggleHighlight: (index) =>
    set((state) => ({
      highlightedQuestions: state.highlightedQuestions.includes(index)
        ? state.highlightedQuestions.filter((i) => i !== index)
        : [...state.highlightedQuestions, index],
    })),
  calculateScore: (questions) =>
    set((state) => {
      const score = Object.entries(state.answers).reduce((total, [qIndex, answerIndex]) => {
        const question = questions[parseInt(qIndex)];
        return question.correctAnswer === answerIndex ? total + question.point : total;
      }, 0);
      return { totalScore: score };
    }),
}));
