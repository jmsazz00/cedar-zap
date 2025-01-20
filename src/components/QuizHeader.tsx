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
        py: 1.25,
        pl: { xs: 0.75, sm: 2, md: 3 },
        borderRadius: 1,
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(90deg, rgba(92, 107, 192, 0.35), rgba(46, 59, 92, 0.5), rgba(18, 18, 18, 0.6))", // Lightened gradient
        width: "fit-content",
        boxShadow: "0 1px 5px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          background:
            "linear-gradient(to right, rgba(92, 107, 192, 0.8), rgba(112, 123, 202, 0.6))", // Softer text gradient
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
          color: "rgba(255,255,255,0.8)",
          fontSize: { xs: "0.66rem", md: "0.75rem" },
          fontWeight: "500",
          backgroundColor: "primary.dark",
          borderRadius: 1,
          px: 0.75,
          mx: { xs: 1.25, sm: 2, md: 2.5 },
        }}
      >
        {year}
      </Typography>
    </Box>
  );
};

export default QuizHeader;
