import { Box, Container } from "@mui/material";
import questions from "../data/questions";
import { useQuizContext } from "../context/QuizContext";
import QuestionCard from "./QuestionCard";
import QuizHeader from "./QuizHeader";
import QuizTimer from "./QuizTimer";
import ScoreDialog from "./ScoreDialog";
import Sidebar from "./Sidebar";
import { Quiz } from "../entities/Quiz";

interface Props {
  quiz: Quiz;
}

const QuizLayout = ({ quiz }: Props) => {
  const { name, year, duration } = quiz;
  const { open, score, maxScore, closeDialog, finishTest } = useQuizContext();

  return (
    <Box sx={{ display: { md: "flex" }, pt: { xs: "60px", sm: "68px" } }}>
      <QuizTimer duration={duration} onTimeUp={finishTest} />
      <Sidebar questionCount={questions.length} />
      <Container sx={{ mx: 0 }}>
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

export default QuizLayout;
