import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { useQuizStore } from "../store/QuizStore";

interface QuizTimerProps {
  duration: number; // in seconds
  onTimeUp: () => void;
}

const QuizTimer = ({ duration, onTimeUp }: QuizTimerProps) => {
  const mainColor = "#5C6BC0";
  const [timeLeft, setTimeLeft] = useState(duration);
  const [showText, setShowText] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const showAnswers = useQuizStore((st) => st.showAnswers);
  const finishTest = useQuizStore((st) => st.finishTest);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const initialRender = useRef(true);

  // Timer logic
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
          top: { xs: "152px", md: "87px" },
          right: { xs: "16px", sm: "23px" },
          backgroundColor: timeLeft <= 30 ? "error.dark" : mainColor,
          color: "#fff",
          p: { xs: "3px 4.5px", lg: "4px 8px" },
          borderRadius: 1,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          border: "1px solid rgba(0, 0, 0, 0.3)",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          transition: "all 0.3s ease",
          zIndex: 999,
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
            fontSize: { xs: "1.35rem", md: "1.5rem", lg: "1.6rem" },
          }}
        />
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: ".95rem", md: "1.1rem", lg: "1.25rem" },
            overflow: "hidden",
            whiteSpace: "nowrap",
            transition: "max-width 0.3s ease",
            maxWidth: showText ? "100px" : "0px",
          }}
        >
          {formatTime(timeLeft)}
        </Typography>
      </Box>
    )
  );
};

export default QuizTimer;
