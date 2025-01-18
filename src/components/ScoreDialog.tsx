import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import ScoreChart from "./ScoreChart";
import StatsGrid from "./StatsGrid";
import { useQuizStateStore } from "../store/QuizStateStore";

const ScoreDialog = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const scoreDialogOpen = useQuizStateStore((state) => state.scoreDialogOpen);
  const score = useQuizStateStore((state) => state.score);
  const maxScore = useQuizStateStore((state) => state.maxScore);
  const questionsAnswered = useQuizStateStore(
    (state) => state.questionsAnswered
  );
  const incorrectCount = useQuizStateStore(
    (state) => state.tempFalseQuestions.length
  );
  const elapsedTime = useQuizStateStore((state) => state.elapsedTime);
  const questionCount = useQuizStateStore((state) => state.questions.length);
  const closeScoreDialog = useQuizStateStore((state) => state.closeScoreDialog);

  const scorePercentage = Math.round((score / maxScore) * 100);

  return (
    <Dialog
      open={scoreDialogOpen}
      fullScreen
      TransitionComponent={Slide}
      TransitionProps={{ in: scoreDialogOpen, timeout: 300 }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.8rem",
          bgcolor: "primary.main",
          color: "#fff",
        }}
      >
        Quiz Results
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          p: 4,
        }}
      >
        <ScoreChart scorePercentage={scorePercentage} />
        <Typography
          variant="h5"
          align="center"
          color="textPrimary"
          sx={{ mt: 2, fontWeight: "bold" }}
        >
          Your Total Score:{" "}
          <strong>
            {score}/{maxScore}
          </strong>
        </Typography>
        <Divider sx={{ width: "90%", my: isMobile ? 4 : 0 }} />
        <Box width={"100%"}>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Additional Stats
          </Typography>
          <StatsGrid
            maxQuestions={questionCount}
            questionsAnswered={questionsAnswered}
            falseQuestions={incorrectCount}
            elapsedTime={elapsedTime}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: 4,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ width: isMobile ? "100%" : "50%" }}
            onClick={closeScoreDialog}
          >
            Check Answers
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ScoreDialog;
