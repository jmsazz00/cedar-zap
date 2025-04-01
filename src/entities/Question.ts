export default interface Question {
  index: number;
  question: string;
  options: string[];
  point: number;
  correctAnswers: number[];
  type: "single-choice" | "multiple-choice" | "dropdown";
  dropdownItems?: string[];
}
