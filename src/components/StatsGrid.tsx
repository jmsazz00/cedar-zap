import { Box, Grid, Typography } from "@mui/material";
import { useFormatTime } from "../hooks/useFormatTime";

interface StatsGridProps {
  maxQuestions: number;
  questionsAnswered: number;
  falseQuestions: number;
  elapsedTime: number;
}

const StatsGrid: React.FC<StatsGridProps> = ({
  maxQuestions,
  questionsAnswered,
  falseQuestions,
  elapsedTime,
}) => {
  const formatTime = useFormatTime();

  const StatTypography: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    return (
      <Typography variant="body1" sx={{ fontWeight: "bold", mb: 0.5 }}>
        {children}
      </Typography>
    );
  };

  const commonStyles = {
    p: 2,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    borderRadius: 2,
  };

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      sx={{ textAlign: "center" }}
    >
      <Grid item xs={6} sm={4}>
        <Box sx={commonStyles}>
          <StatTypography>Questions Answered</StatTypography>
          <Typography variant="h6" color="secondary">
            {questionsAnswered}/{maxQuestions}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} sm={4}>
        <Box sx={commonStyles}>
          <StatTypography>Incorrect Answers</StatTypography>
          <Typography variant="h6" color="error">
            {falseQuestions}/{questionsAnswered}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} sm={4}>
        <Box sx={commonStyles}>
          <StatTypography>Time Taken</StatTypography>
          <Typography variant="h6" color="success">
            {formatTime(elapsedTime)}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default StatsGrid;
