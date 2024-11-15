import { Box, Typography } from "@mui/material";

interface Props {
  name: string;
  year: string;
}

const QuizHeader = ({ name, year }: Props) => {
  return (
    <Box
      sx={{
        my: 3,
        py: 1,
        px: 2.5,
        borderRadius: 1,
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(90deg, rgba(88, 29, 104, 0.6), rgba(46, 31, 62, 0.3))",
        width: "fit-content",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          background: "linear-gradient(to right, #8e24aa, #bb86fc)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold",
          borderRight: "2px solid #6a1b9a",
          pr: 2,
        }}
      >
        &lt; {name} Quiz
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          color: "#bb86fc",
          fontSize: "0.75rem",
          fontWeight: "600",
          backgroundColor: "#4a306b",
          borderRadius: 1,
          px: 1,
          ml: 2,
        }}
      >
        {year}
      </Typography>
    </Box>
  );
};

export default QuizHeader;
