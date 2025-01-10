import QuizLayout from "../components/QuizLayout";
import questions from "../data/questions";
import { QuizProvider } from "../context/QuizContext";

const QuizPage = () => {
  return (
    <QuizProvider questions={questions}>
      <QuizLayout
        quiz={{ duration: 3600, name: "Gynecology", year: "24-25" }}
      />
    </QuizProvider>
  );
};

export default QuizPage;
