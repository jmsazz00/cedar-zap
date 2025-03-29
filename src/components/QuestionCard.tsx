import { Box, Divider, Paper } from "@mui/material";
import React, { useMemo } from "react";
import Question from "../entities/Question";
import { useCheckMobileScreen } from "../hooks/useCheckMobileScreen";
import useScrollToTop from "../hooks/useScrollToTop";
import { useQuizInputStore } from "../store/QuizInputStore";
import { useQuizStateStore } from "../store/QuizStateStore";
import AnswerResetButton from "./AnswerResetButton";
import OptionsList from "./OptionsList";
import Pagination from "./Pagination";
import QuestionHeader from "./QuestionHeader";
import QuestionQuery from "./QuestionQuery";

interface QuestionCardProps {
  questions: Question[];
}

const QuestionCard: React.FC<QuestionCardProps> = ({ questions }) => {
  const { isMobile } = useCheckMobileScreen();

  const answers = useQuizInputStore((store) => store.answers);
  const setAnswer = useQuizInputStore((store) => store.setAnswer);
  const showAnswers = useQuizStateStore((state) => state.showAnswers);
  const currentQuestionIndex = useQuizInputStore(
    (st) => st.currentQuestionIndex
  );

  const currentQuestionData = useMemo(
    () => questions[currentQuestionIndex],
    [currentQuestionIndex, questions]
  );

  const { question, options, point, correctAnswers, type } =
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
            <QuestionQuery question={question} type={type} />
            {type === "single-choice" || type === "multiple-choice" ? (
              <OptionsList
                options={options}
                correctAnswers={correctAnswers}
                isMultipleChoice={type === "multiple-choice"}
              />
            ) : null}
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

export default QuestionCard;
