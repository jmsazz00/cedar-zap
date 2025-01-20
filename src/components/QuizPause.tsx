import { useQuizStateStore } from "../store/QuizStateStore";
import Pause from "./Pause";

const QuizPause = () => {
  const onPause = useQuizStateStore((st) => st.handlePause);
  const pauseDialogOpen = useQuizStateStore((st) => st.pauseDialogOpen);
  const showAnswers = useQuizStateStore((st) => st.showAnswers);

  return pauseDialogOpen || showAnswers ? null : <Pause onPause={onPause} />;
};

export default QuizPause;
