import { Box, Container } from "@mui/material";
import { useQuizContext } from "../context/QuizContext";
import questions from "../data/questions";
import { Quiz } from "../entities/Quiz";
import QuestionCard from "./QuestionCard";
import QuizHeader from "./QuizHeader";
import QuizTimer from "./QuizTimer";
import ScoreDialog from "./ScoreDialog";
import Sidebar from "./Sidebar";
import WarningDialog from "./WarningDialog";

interface Props {
  quiz: Quiz;
}

const QuizLayout = ({ quiz }: Props) => {
  const { name, year, duration } = quiz;
  const {
    scoreDialogOpen,
    warningDialogOpen,
    score,
    maxScore,
    closeScoreDialog,
    closeWarningDialog,
    handleSubmit,
  } = useQuizContext();

  return (
    <Box sx={{ display: { md: "flex" }, pt: { xs: "60px", sm: "68px" } }}>
      <QuizTimer duration={duration} onTimeUp={() => handleSubmit(true)} />
      <Sidebar questionCount={questions.length} />
      <Container sx={{ mx: 0 }}>
        <QuizHeader name={name} year={year} />
        <QuestionCard questions={questions} />
      </Container>
      <ScoreDialog
        open={scoreDialogOpen}
        score={score}
        maxScore={maxScore}
        onClose={closeScoreDialog}
      />
      <WarningDialog
        open={warningDialogOpen}
        onConfirm={handleSubmit}
        onClose={closeWarningDialog}
      />
    </Box>
  );
};

export default QuizLayout;
