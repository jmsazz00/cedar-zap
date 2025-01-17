import { useQuizStateStore } from "../store/QuizStateStore";
import Timer from "./Timer";

const QuizTimer: React.FC<{ duration: number }> = ({ duration }) => {
  const setElapsedTime = useQuizStateStore((state) => state.setElapsedTime);
  const handleSubmit = useQuizStateStore((state) => state.handleSubmit);

  return (
    <Timer
      duration={duration}
      onTimeUp={() => handleSubmit(true)}
      onTimeElapsed={(elapsedTime) => setElapsedTime(elapsedTime)}
    />
  );
};

export default QuizTimer;
