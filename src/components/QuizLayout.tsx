import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import questions from "../data/questions";
import { Quiz } from "../entities/Quiz";
import { useQuizStateStore } from "../store/QuizStateStore";
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

  const scoreDialogOpen = useQuizStateStore((state) => state.scoreDialogOpen);
  const warningDialogOpen = useQuizStateStore(
    (state) => state.warningDialogOpen
  );
  const score = useQuizStateStore((state) => state.score);
  const maxScore = useQuizStateStore((state) => state.maxScore);
  const closeScoreDialog = useQuizStateStore((state) => state.closeScoreDialog);
  const closeWarningDialog = useQuizStateStore(
    (state) => state.closeWarningDialog
  );
  const handleSubmit = useQuizStateStore((state) => state.handleSubmit);
  const setQuestions = useQuizStateStore((state) => state.setQuestions);

  useEffect(() => {
    setQuestions(questions);
  }, []);

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
