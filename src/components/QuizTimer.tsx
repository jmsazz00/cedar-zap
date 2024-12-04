import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useQuizStore } from "../store/QuizStore";

interface QuizTimerProps {
  duration: number; // in seconds
  onTimeUp: () => void;
}

const QuizTimer = ({ duration, onTimeUp }: QuizTimerProps) => {
  const mainColor = "#5C6BC0";
  const [timeLeft, setTimeLeft] = useState(duration);
  const [bgColor, setBgColor] = useState(mainColor);

  const showAnswers = useQuizStore((st) => st.showAnswers);
  const finishTest = useQuizStore((st) => st.finishTest);

  useEffect(() => {
    const interval = setInterval(() => {
      if (finishTest) clearInterval(interval);
      setTimeLeft((prevTime) => {
        if (prevTime <= 1 && !finishTest) {
          clearInterval(interval);
          onTimeUp();
          return 0;
        }
        return finishTest ? prevTime : prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimeUp, finishTest]);

  useEffect(() => {
    // Change background color in the last 30 seconds
    if (timeLeft <= 30) setBgColor("error.dark");
    else setBgColor(mainColor);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    !showAnswers && (
      <Box
        sx={{
          position: "fixed",
          top: "87px",
          right: "20px",
          backgroundColor: bgColor,
          color: "#fff",
          padding: "4px 12px",
          borderRadius: 1,
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          transition: "background-color 0.3s ease",
        }}
      >
        <Typography variant="h6">{formatTime(timeLeft)}</Typography>
      </Box>
    )
  );
};

export default QuizTimer;
