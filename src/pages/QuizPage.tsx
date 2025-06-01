import QuizLayout from "../components/QuizLayout";

const QuizPage = () => {
  return (
    <QuizLayout quiz={{ duration: 4800, name: "Gynecology", year: "24-25" }} />
  );
};

export default QuizPage;
