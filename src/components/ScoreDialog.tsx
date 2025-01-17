import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Slide,
  Typography,
} from "@mui/material";
import { ResponsiveRadialBar } from "@nivo/radial-bar";
import React from "react";
import { useFormatTime } from "../hooks/useFormatTime";

interface ScoreDialogProps {
  open: boolean;
  score: number;
  maxScore: number;
  maxQuestions: number;
  questionsAnswered: number;
  elapsedTime: number;
  onClose: () => void;
}

const ScoreDialog: React.FC<ScoreDialogProps> = ({
  open,
  score,
  maxScore,
  maxQuestions,
  questionsAnswered,
  elapsedTime,
  onClose,
}) => {
  const formatTime = useFormatTime();

  const scorePercentage = Math.round((score / maxScore) * 100);

  const data = [
    {
      id: "score",
      data: [
        {
          x: "Score",
          y: scorePercentage,
        },
      ],
    },
  ];

  const getColor = (percentage: number) => {
    if (percentage >= 80) return "#4caf50"; // green for high score
    if (percentage >= 50) return "#ffa726"; // orange for medium score
    return "#ef5350"; // red for low score
  };

  return (
    <Dialog
      open={open}
      fullScreen
      TransitionComponent={Slide}
      TransitionProps={{ in: open, timeout: 300 }}
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
        {/* Score Chart Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Box sx={{ height: "250px", width: "250px", position: "relative" }}>
            <ResponsiveRadialBar
              data={data}
              maxValue={100}
              valueFormat={(value) => `${value}%`}
              startAngle={-180}
              endAngle={180}
              cornerRadius={5}
              padding={0.6}
              innerRadius={0.5}
              enableRadialGrid={false}
              enableTracks={false}
              radialAxisStart={null}
              circularAxisOuter={null}
              isInteractive={false}
              colors={[getColor(scorePercentage)]}
              animate={true}
              motionConfig="wobbly"
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: getColor(scorePercentage),
                fontSize: "2.5rem",
                fontWeight: "bold",
              }}
            >
              {scorePercentage}%
            </Box>
          </Box>
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
        </Box>

        {/* Placeholder for Additional Stats */}
        <Box sx={{ width: "100%" }}>
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
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ textAlign: "center" }}
          >
            <Grid item xs={6} sm={4}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Questions Answered
              </Typography>
              <Typography variant="h6" color="primary">
                {questionsAnswered}/{maxQuestions}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Accuracy
              </Typography>
              <Typography variant="h6" color="secondary">
                {scorePercentage}/100
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Time Taken
              </Typography>
              <Typography variant="h6" color="success">
                {formatTime(elapsedTime)}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ width: "100%", my: 4 }} />

        {/* Call-to-Action Section */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mb: 2, width: "60%" }}
            onClick={onClose}
          >
            Check Answers
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ScoreDialog;
