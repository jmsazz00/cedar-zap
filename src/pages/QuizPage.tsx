import { Box, Container } from "@mui/material";
import QuestionCard from "../components/QuestionCard";
import Sidebar from "../components/Sidebar";
import questions from "../data/questions";
import { useQuizStore } from "../store/QuizStore";
import QuizTimer from "../components/QuizTimer";
import useFinishTest from "../hooks/useFinishTest";
import ScoreDialog from "../components/ScoreDialog";
import { Quiz } from "../entities/Quiz";
import QuizHeader from "../components/QuizHeader";

interface Props {
  quiz: Quiz;
}

const QuizPage = ({ quiz }: Props) => {
  const { name, year, duration } = quiz;

  const currentQuestion = useQuizStore((st) => st.currentQuestion);
  const showAnswers = useQuizStore((st) => st.showAnswers);

  const questionData = questions[currentQuestion];

  const { finishTest, maxScore, open, score, closeDialog } =
    useFinishTest(questions);

  const questionQuery = {
    index: currentQuestion,
    question: questionData.question,
    options: questionData.options,
    point: questionData.point,
    correctAnswer: questionData.correctAnswer,
  };

  return (
    <Box sx={{ display: "flex", pt: "64px" }}>
      {!showAnswers && <QuizTimer duration={duration} onTimeUp={finishTest} />}
      <Sidebar questionCount={questions.length} />
      <Container>
        <QuizHeader name={name} year={year} />
        <QuestionCard
          totalQuestions={questions.length}
          questionQuery={questionQuery}
        />
      </Container>
      <ScoreDialog
        open={open}
        score={score}
        maxScore={maxScore}
        onClose={closeDialog}
      />
    </Box>
  );
};

export default QuizPage;
