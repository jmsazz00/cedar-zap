import { Box, Divider, Paper, useMediaQuery, useTheme } from "@mui/material";
import React, { useMemo } from "react";
import Question from "../entities/Question";
import useScrollToTop from "../hooks/useScrollToTop";
import { useQuizInputStore } from "../store/QuizInputStore";
import AnswerResetButton from "./AnswerResetButton";
import OptionsList from "./OptionsList";
import Pagination from "./Pagination";
import QuestionHeader from "./QuestionHeader";
import QuestionQuery from "./QuestionQuery";

interface QuestionCardProps {
  questions: Question[];
}

const QuestionCard: React.FC<QuestionCardProps> = ({ questions }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const answers = useQuizInputStore((store) => store.answers);
  const setAnswer = useQuizInputStore((store) => store.setAnswer);
  const showAnswers = useQuizInputStore((state) => state.showAnswers);
  const currentQuestionIndex = useQuizInputStore((st) => st.currentQuestionIndex);

  const currentQuestionData = useMemo(
    () => questions[currentQuestionIndex],
    [currentQuestionIndex, questions]
  );

  const { question, options, point, correctAnswers, isMultipleChoice } =
    currentQuestionData;

  useScrollToTop(currentQuestionIndex);

  return (
    <Box
      display="flex"
      flexDirection={isMobile ? "column" : "row"}
      minWidth={{ lg: "900px" }}
      maxWidth={{ lg: "1050px" }}
      gap={isMobile ? 2 : 0}
      sx={{
        m: { sm: "0 auto", lg: "0" },
        width: { xs: "100%", md: "fit-content" },
      }}
    >
      <QuestionHeader point={point} />
      {!isMobile && (
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderColor: "divider", mx: 2 }}
        />
      )}
      <Box width={"100%"}>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            p: isMobile ? 1.75 : 2,
            bgcolor: "background.paper",
            borderRadius: 2,
            width: "100%",
          }}
        >
          <Box sx={{ flex: 1, px: isMobile ? 0 : 1.5 }}>
            <QuestionQuery
              question={question}
              isMultipleChoice={isMultipleChoice}
            />
            <OptionsList
              options={options}
              correctAnswers={correctAnswers}
              isMultipleChoice={isMultipleChoice}
            />
          </Box>
          {!showAnswers && answers[currentQuestionIndex]?.length > 0 && (
            <Box display={"flex"} justifyContent={"center"} mt={1}>
              <AnswerResetButton
                resetAnswer={() => setAnswer(currentQuestionIndex, -1)}
              />
            </Box>
          )}
        </Paper>
        <Box my={isMobile ? 2 : 3}>
          <Pagination totalQuestions={questions.length} />
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(QuestionCard);
