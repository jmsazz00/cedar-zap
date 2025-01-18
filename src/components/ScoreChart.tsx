import { Box } from "@mui/material";
import { ResponsiveRadialBar } from "@nivo/radial-bar";
import { useCallback } from "react";

interface ScoreChartProps {
  scorePercentage: number;
}

const ScoreChart: React.FC<ScoreChartProps> = ({ scorePercentage }) => {
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

  const getColor = useCallback((percentage: number) => {
    if (percentage >= 80) return "#4caf50"; // green for high score
    if (percentage >= 50) return "#ffa726"; // orange for medium score
    return "#ef5350"; // red for low score
  }, []);

  return (
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
  );
};

export default ScoreChart;
