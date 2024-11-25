import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import GradeIcon from "@mui/icons-material/Grade";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useQuizStore } from "../store/QuizStore";

interface QuestionHeaderProps {
  index: number;
  point: number;
}

const QuestionHeader: React.FC<QuestionHeaderProps> = ({ index, point }) => {
  const isHighlighted = useQuizStore((store) =>
    store.highlightedQuestions.includes(index)
  );
  const toggleHighlight = useQuizStore((store) => store.toggleHighlight);
  const showAnswers = useQuizStore((store) => store.showAnswers);

  return (
    <Box
      sx={{
        bgcolor: "#1b1b1b",
        px: 2,
        py: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 1,
        minWidth: "160px",
        height: "fit-content",
        border: "1px solid rgba(255, 255, 255, 0.15)",
      }}
    >
      <Typography
        variant="h6"
        component="h2"
        sx={{ fontWeight: "bold", color: "primary.main", mb: 1 }}
      >
        {`Question ${index + 1}`}
      </Typography>
      <Divider
        sx={{ width: "100%", mb: 1, borderColor: "rgba(255, 255, 255, 0.25)" }}
      />
      {!showAnswers && (
        <Box
          onClick={() => toggleHighlight(index)}
          sx={{
            display: "flex",
            alignItems: "center",
            color: isHighlighted ? "secondary.light" : "secondary.main",
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          <EmojiFlagsIcon sx={{ fontSize: "1.2rem", mr: 0.5 }} />
          {isHighlighted ? "Dehighlight" : "Highlight"}
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          my: 0.25,
          color: "rgb(255,255,255,0.7)",
        }}
      >
        <GradeIcon sx={{ fontSize: "1.2rem", mr: 0.5, color: "#ffc107" }} />
        Grade: {point}pt
      </Box>
    </Box>
  );
};

export default QuestionHeader;
