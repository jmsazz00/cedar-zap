import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import Question from "../entities/Question";
import { useQuizStore } from "../store/QuizStore";
import AnswerResetButton from "./AnswerResetButton";
import OptionsList from "./OptionsList";
import Pagination from "./Pagination";
import QuestionHeader from "./QuestionHeader";

interface QuestionCardProps {
  questions: Question[];
}

const QuestionCard: React.FC<QuestionCardProps> = ({ questions }) => {
  const answers = useQuizStore((store) => store.answers);
  const setAnswer = useQuizStore((store) => store.setAnswer);
  const showAnswers = useQuizStore((state) => state.showAnswers);
  const currentQuestion = useQuizStore((st) => st.currentQuestion);
  const { question, options, point, correctAnswers, isMultipleChoice } =
    questions[currentQuestion];

  const index = currentQuestion;

  return (
    <Box display="flex" minWidth={{ lg: "850px" }} maxWidth={{ lg: "1050px" }}>
      <QuestionHeader index={index} point={point} />
      <Divider
        orientation="vertical"
        flexItem
        sx={{ borderColor: "divider", mx: 2 }}
      />
      <Box width={"100%"}>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
            bgcolor: "background.paper",
            borderRadius: 2,
            width: "100%",
          }}
        >
          <Box sx={{ flex: 1, px: 2 }}>
            <Typography variant="body1" sx={{ mb: 2, color: "text.primary" }}>
              {question}
            </Typography>
            <OptionsList
              options={options}
              questionIndex={index}
              correctAnswers={correctAnswers}
              showAnswers={showAnswers}
              isMultipleChoice={isMultipleChoice}
            />
          </Box>
          {!showAnswers && answers[index]?.length > 0 && (
            <Box display={"flex"} justifyContent={"center"}>
              <AnswerResetButton resetAnswer={() => setAnswer(index, -1)} />
            </Box>
          )}
        </Paper>
        <Box my={3}>
          <Pagination totalQuestions={questions.length} />
        </Box>
      </Box>
    </Box>
  );
};

export default QuestionCard;
