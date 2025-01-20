import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useFormatTime } from "../hooks/useFormatTime";
import { useQuizStateStore } from "../store/QuizStateStore";

interface TimerProps {
  duration: number; // in seconds
  onTimeUp: () => void;
  onTimeElapsed: (time: number) => void;
}

const Timer = ({ duration, onTimeUp, onTimeElapsed }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [showText, setShowText] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const pauseTimer = useQuizStateStore((st) => st.pauseTimer);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const initialRender = useRef(true);
  const onTimeUpCalled = useRef(false); // Prevent multiple `onTimeUp` calls

  const formatTime = useFormatTime();

  // Timer logic
  useEffect(() => {
    if (pauseTimer || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [pauseTimer]);

  // Handle `onTimeUp` when time reaches 0
  useEffect(() => {
    if (timeLeft === 0 && !onTimeUpCalled.current) {
      onTimeUpCalled.current = true; // Mark as called to prevent loops
      onTimeUp();
    }
  }, [timeLeft, onTimeUp]);

  // Notify elapsed time
  useEffect(() => {
    onTimeElapsed(duration - timeLeft);
  }, [timeLeft, duration, onTimeElapsed]);

  // Scroll logic for mobile
  const handleScroll = () => {
    if (initialRender.current) {
      initialRender.current = false; // Skip the first scroll check
      return;
    }

    if (window.scrollY > 0 && !scrolled) {
      setShowText(false);
      setScrolled(true);
    }
  };

  useEffect(() => {
    if (!isMobile) return;

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, isMobile]);

  return (
    <Box
      sx={{
        backgroundColor: timeLeft <= 30 ? "error.dark" : "primary.main",
        color: "#fff",
        p: { xs: "1.5px 3px", lg: "4px 8px" },
        borderRadius: 0.5,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        border: "1px solid rgba(0, 0, 0, 0.3)",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        transition: "all 0.3s ease",
        animation: !showText
          ? "vibrateWithPause 5s ease-in-out infinite"
          : "none",
      }}
      onClick={() => setShowText((prev) => !prev)}
    >
      <AccessTimeIcon
        sx={{
          marginRight: showText ? (isMobile ? "4px" : "6px") : "0",
          transition: "margin-right 0.3s ease",
          fontSize: { xs: "1.25rem", md: "1.5rem", lg: "1.6rem" },
        }}
      />
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: ".88rem", md: "1.1rem", lg: "1.25rem" },
          overflow: "hidden",
          whiteSpace: "nowrap",
          transition: "max-width 0.3s ease",
          maxWidth: showText ? "100px" : "0px",
        }}
      >
        {formatTime(timeLeft)}
      </Typography>
    </Box>
  );
};

export default Timer;
