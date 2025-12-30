import { QuestionType } from "./QuestionType";

export default interface Question {
  index: number;
  question: string;
  options: string[];
  point: number;
  correctAnswers: number[];
  type: QuestionType;
  dropdownItems?: string[];
}
