import QuizLayout from "../components/QuizLayout";

const QuizPage = () => {
  return (
    <QuizLayout quiz={{ duration: 3600, name: "Gynecology", year: "24-25" }} />
  );
};

export default QuizPage;
