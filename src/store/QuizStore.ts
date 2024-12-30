import { create } from "zustand";
import Question from "../entities/Question";

interface QuizStore {
  answers: Record<number, number[]>; // Updated to support multiple answers
  currentQuestion: number;
  highlightedQuestions: number[];
  totalScore: number;
  showAnswers: boolean;
  finishTest: boolean;
  setShowAnswers: (value: boolean) => void;
  setAnswer: (index: number, answerIndex: number) => void;
  toggleAnswer: (index: number, answerIndex: number) => void; // New method for toggling answers
  setCurrentQuestion: (index: number) => void;
  toggleHighlight: (index: number) => void;
  calculateScore: (questions: Question[]) => void;
  setFinishTest: (value: boolean) => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  answers: {},
  currentQuestion: 0,
  highlightedQuestions: [],
  totalScore: 0,
  showAnswers: false,
  finishTest: false,
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
  setCurrentQuestion: (index) => set({ currentQuestion: index }),
  toggleHighlight: (index) =>
    set((state) => ({
      highlightedQuestions: state.highlightedQuestions.includes(index)
        ? state.highlightedQuestions.filter((i) => i !== index)
        : [...state.highlightedQuestions, index],
    })),
  calculateScore: (questions) =>
    set((state) => {
      const score = Object.entries(state.answers).reduce(
        (total, [qIndex, selectedAnswers]) => {
          const question = questions[parseInt(qIndex)];
          const isCorrect = question.isMultipleChoice
            ? question.correctAnswers.every((ans) =>
                selectedAnswers.includes(ans)
              ) && selectedAnswers.length === question.correctAnswers.length
            : question.correctAnswers.includes(selectedAnswers[0]);
          return isCorrect ? total + question.point : total;
        },
        0
      );
      return { totalScore: score };
    }),
  setFinishTest: (value: boolean) => set({ finishTest: value }),
}));
