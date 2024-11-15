import { Box, Typography } from "@mui/material";

interface Props {
  name: string;
  year: string;
}

const QuizHeader = ({ name, year }: Props) => {
  return (
    <Box
      sx={{
        mt: 2.5,
        mb: 3,
        py: 1,
        px: 3,
        borderRadius: 1,
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(90deg, rgba(88, 29, 104, 0.55), rgba(46, 31, 62, 0.7), rgba(18, 18, 18, 0.8))",
        width: "fit-content",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          background:
            "linear-gradient(to right, rgba(142, 36, 170, 0.88), rgba(187, 134, 252, 0.66))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold",
          borderRight: "2px solid #6a1b9a",
          pr: 2.5,
        }}
      >
        &lt; {name} Quiz
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          color: "#bb86fc",
          fontSize: "0.75rem",
          fontWeight: "500",
          backgroundColor: "#4a306b",
          borderRadius: 1,
          px: 1,
          ml: 2.5,
        }}
      >
        {year}
      </Typography>
    </Box>
  );
};

export default QuizHeader;
