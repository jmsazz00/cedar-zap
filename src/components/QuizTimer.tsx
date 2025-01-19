import { useQuizStateStore } from "../store/QuizStateStore";
import Timer from "./Timer";

const QuizTimer: React.FC<{ duration: number }> = ({ duration }) => {
  const showAnswers = useQuizStateStore((st) => st.showAnswers);
  const setElapsedTime = useQuizStateStore((state) => state.setElapsedTime);
  const handleSubmit = useQuizStateStore((state) => state.handleSubmit);

  return showAnswers ? null : (
    <Timer
      duration={duration}
      onTimeUp={() => handleSubmit(true)}
      onTimeElapsed={(elapsedTime) => setElapsedTime(elapsedTime)}
    />
  );
};

export default QuizTimer;
