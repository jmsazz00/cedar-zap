import { Box, Typography } from "@mui/material";

interface Props {
  name: string;
  year: string;
}

const QuizHeader = ({ name, year }: Props) => {
  return (
    <Box
      sx={{
        my: { xs: 2, md: 2.5 },
        py: 1,
        px: { xs: 0.75, sm: 2, md: 3 },
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
          fontSize: {
            xs: "1.25rem",
            sm: "1.35rem",
            md: "1.5rem",
            lg: "1.6rem",
          },
        }}
      >
        &lt; {name} Quiz
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          color: "#bb86fc",
          fontSize: { xs: "0.66rem", md: "0.75rem" },
          fontWeight: "500",
          backgroundColor: "#4a306b",
          borderRadius: 1,
          px: 0.75,
          mx: { xs: 1.5, sm: 2, md: 2.5 },
        }}
      >
        {year}
      </Typography>
    </Box>
  );
};

export default QuizHeader;
