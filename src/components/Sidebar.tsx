import React, { useRef, useState } from "react";
import { useQuizStore } from "../store/QuizStore";
import { Box, Divider, useMediaQuery, useTheme } from "@mui/material";
import FinishTestButton from "./FinishTestButton";
import ScoreDialog from "./ScoreDialog";
import useFinishTest from "../hooks/useFinishTest";
import questions from "../data/questions";
import SidebarButton from "./SidebarButton";

const Sidebar: React.FC<{ questionCount: number }> = ({ questionCount }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atEnd, setAtEnd] = useState(false);

  const setCurrentQuestionIndex = useQuizStore(
    (store) => store.setCurrentQuestionIndex
  );
  const showAnswers = useQuizStore((store) => store.showAnswers);
  const falseQuestions = useQuizStore((store) => store.falseQuestions);

  const { open, closeDialog, finishTest, score, maxScore } =
    useFinishTest(questions);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1); // `-1` to account for rounding errors
  };

  const shadowOverlay = !atEnd && (
    <Box
      sx={{
        background:
          "linear-gradient(to left, rgba(29, 29, 29, 0.8), transparent)",
        height: "100%",
        pointerEvents: "none", // Ensure it doesn't block interactions
        position: "absolute",
        right: 0,
        top: 0,
        width: "45px",
        zIndex: 99,
      }}
    />
  );

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRight: isMobile ? "none" : "1px solid #444",
        height: isMobile ? "auto" : "calc(100vh - 64px)",
        minWidth: isMobile ? "auto" : "fit-content",
        overflowY: "auto",
        p: isMobile ? 0 : 2,
        position: isMobile ? "relative" : "sticky",
        top: isMobile ? "initial" : "64px",
      }}
    >
      {isMobile && shadowOverlay}
      <Box
        ref={isMobile ? scrollRef : undefined}
        sx={{
          display: isMobile ? "flex" : "grid",
          gridTemplateColumns: {
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 1,
          overflowX: "auto",
          p: isMobile ? 1 : 0,
          "::-webkit-scrollbar": {
            width: "2px",
            height: "2px",
          },
        }}
        onScroll={isMobile ? handleScroll : undefined}
      >
        {Array.from({ length: questionCount }, (_, i) => {
          return (
            <SidebarButton
              key={i}
              index={i}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              falseQuestions={falseQuestions}
              showAnswers={showAnswers}
            />
          );
        })}
      </Box>
      {!isMobile && !showAnswers && (
        <>
          <Divider sx={{ my: 2 }} />
          <Box>
            <FinishTestButton onFinish={finishTest} />
            <ScoreDialog
              onClose={closeDialog}
              open={open}
              score={score}
              maxScore={maxScore}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Sidebar;
