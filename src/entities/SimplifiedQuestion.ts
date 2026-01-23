import { QuestionType } from "./QuestionType";

export default interface SimplifiedQuestion {
  index: number; 
  point: number;
  correctAnswers: number[];
  type: QuestionType;
}