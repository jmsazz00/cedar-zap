import { useQuizStateStore } from "../store/QuizStateStore";
import ScoreDialog from "./ScoreDialog";
import WarningDialog from "./WarningDialog";

const DialogsList = () => {
  const scoreDialogOpen = useQuizStateStore((state) => state.scoreDialogOpen);
  const warningDialogOpen = useQuizStateStore(
    (state) => state.warningDialogOpen
  );
  const score = useQuizStateStore((state) => state.score);
  const maxScore = useQuizStateStore((state) => state.maxScore);
  const questionsAnswered = useQuizStateStore(
    (state) => state.questionsAnswered
  );
  const elapsedTime = useQuizStateStore((state) => state.elapsedTime);
  const questionCount = useQuizStateStore((state) => state.questions.length);

  const closeScoreDialog = useQuizStateStore((state) => state.closeScoreDialog);
  const closeWarningDialog = useQuizStateStore(
    (state) => state.closeWarningDialog
  );
  const handleSubmit = useQuizStateStore((state) => state.handleSubmit);

  return (
    <>
      <ScoreDialog
        open={scoreDialogOpen}
        score={score}
        maxScore={maxScore}
        questionsAnswered={questionsAnswered}
        maxQuestions={questionCount}
        elapsedTime={elapsedTime}
        onClose={closeScoreDialog}
      />
      <WarningDialog
        open={warningDialogOpen}
        onConfirm={handleSubmit}
        onClose={closeWarningDialog}
      />
    </>
  );
};

export default DialogsList;
