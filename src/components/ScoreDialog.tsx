import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Zoom,
  Typography,
} from "@mui/material";
import { ResponsiveRadialBar } from "@nivo/radial-bar";
import { useQuizStore } from "../store/QuizStore";

interface ScoreDialogProps {
  open: boolean;
  score: number;
  maxScore: number;
  onClose: () => void;
}

const ScoreDialog: React.FC<ScoreDialogProps> = ({
  open,
  score,
  maxScore,
  onClose,
}) => {
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
      maxWidth="xs"
      fullWidth
      disableEscapeKeyDown
      TransitionComponent={Zoom}
      TransitionProps={{ in: open, timeout: 300, unmountOnExit: true }}
    >
      <DialogTitle>Quiz Complete</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 1,
        }}
      >
        {/* Radial Bar Chart */}
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
          {/* Centered Percentage Label */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: getColor(scorePercentage),
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            {scorePercentage}%
          </Box>
        </Box>

        {/* Score Details */}
        <Typography variant="h6" align="center" color="textPrimary" mt={2}>
          Your Total Score:{" "}
          <strong>
            {score}/{maxScore}
          </strong>
        </Typography>

        {/* Close Button */}
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              onClose(); // Close the dialog
              useQuizStore.getState().setShowAnswers(true); // Enable answer feedback
            }}
          >
            Check Answers
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ScoreDialog;
