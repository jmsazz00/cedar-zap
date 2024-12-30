export default interface Question {
  index: number;
  question: string;
  options: string[];
  point: number;
  correctAnswers: number[]; // Updated to handle multiple correct answers
  isMultipleChoice: boolean;
}
