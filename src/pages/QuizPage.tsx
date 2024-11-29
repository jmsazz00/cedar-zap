import { Box, Container } from "@mui/material";
import QuestionCard from "../components/QuestionCard";
import QuizHeader from "../components/QuizHeader";
import QuizTimer from "../components/QuizTimer";
import ScoreDialog from "../components/ScoreDialog";
import Sidebar from "../components/Sidebar";
import questions from "../data/questions";
import { Quiz } from "../entities/Quiz";
import useFinishTest from "../hooks/useFinishTest";

interface Props {
  quiz: Quiz;
}

const QuizPage = ({ quiz }: Props) => {
  const { name, year, duration } = quiz;

  const { finishTest, maxScore, open, score, closeDialog } =
    useFinishTest(questions);

  return (
    <Box sx={{ display: "flex", pt: "64px" }}>
      <QuizTimer duration={duration} onTimeUp={finishTest} />
      <Sidebar questionCount={questions.length} />
      <Container>
        <QuizHeader name={name} year={year} />
        <QuestionCard questions={questions} />
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
