import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface QuizTimerProps {
  duration: number; // in seconds
  onTimeUp: () => void;
}

const QuizTimer = ({ duration, onTimeUp }: QuizTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [bgColor, setBgColor] = useState("#5C6BC0");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          onTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimeUp]);

  useEffect(() => {
    // Change background color in the last 30 seconds
    if (timeLeft <= 30) {
      if (timeLeft <= 10) setBgColor("#DC143C"); // Main red
      else setBgColor("secondary.dark"); // Medium red
    } else setBgColor("#5C6BC0"); // Original bg color
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
    <Box
      sx={{
        position: "fixed",
        top: "84px",
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
  );
};

export default QuizTimer;
