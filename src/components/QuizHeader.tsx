import { Box, Typography, useTheme } from "@mui/material";

interface Props {
  name: string;
  year: string;
}

const QuizHeader = ({ name, year }: Props) => {
  const theme = useTheme(); // Get the current theme (light or dark)

  // Define background and text gradients for light and dark modes
  const backgroundGradient =
    theme.palette.mode === "dark"
      ? "linear-gradient(90deg, rgba(92, 107, 192, 0.35), rgba(46, 59, 92, 0.5), rgba(18, 18, 18, 0.6))"
      : "linear-gradient(90deg, rgba(92, 107, 192, 0.4), rgba(46, 59, 92, 0.25), rgba(230, 240, 255, 0.5))";

  const textGradient =
    theme.palette.mode === "dark"
      ? "linear-gradient(to right, rgba(92, 107, 192, 0.8), rgba(112, 123, 202, 0.6))"
      : "linear-gradient(to right, rgba(92, 107, 192, 0.7), rgba(112, 123, 202, 0.4))";

  const yearBackgroundColor =
    theme.palette.mode === "dark" ? "primary.dark" : "primary.light";

  return (
    <Box
      sx={{
        my: { xs: 2, md: 2.5 },
        py: 1.25,
        pl: { xs: 0.75, sm: 2, md: 3 },
        borderRadius: 1,
        display: "flex",
        alignItems: "center",
        background: backgroundGradient,
        width: "fit-content",
        boxShadow: "0 1px 5px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          background: textGradient,
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
        &lt; {name}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          color: "rgba(255,255,255,0.8)",
          fontSize: { xs: "0.66rem", md: "0.75rem" },
          fontWeight: "500",
          backgroundColor: yearBackgroundColor,
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
