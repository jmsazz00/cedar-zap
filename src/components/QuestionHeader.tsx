import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import GradeIcon from "@mui/icons-material/Grade";
import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useQuizStore } from "../store/QuizStore";

interface QuestionHeaderProps {
  point: number;
}

const CustomDivider = (
  orientation: "horizontal" | "vertical" = "horizontal"
) => (
  <Divider
    orientation={orientation}
    flexItem={orientation === "vertical"}
    sx={{
      width: orientation === "horizontal" ? "100%" : "1px",
      my: orientation === "horizontal" ? 1 : 0,
    }}
  />
);

const QuestionHeader: React.FC<QuestionHeaderProps> = ({ point }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery("(max-width: 390px)");

  const index = useQuizStore((store) => store.currentQuestionIndex);

  const isHighlighted = useQuizStore((store) =>
    store.highlightedQuestions.includes(index)
  );
  const toggleHighlight = useQuizStore((store) => store.toggleHighlight);
  const showAnswers = useQuizStore((store) => store.showAnswers);

  const commonStyles = { fontSize: { xs: "0.8rem", md: "0.95rem" } };

  return (
    <Box
      sx={{
        bgcolor: "#1b1b1b",
        px: isSmallMobile ? 0.5 : isMobile ? 1 : 2,
        py: isMobile ? 1.25 : 3,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: isMobile ? "row" : "column",
        alignItems: "center",
        borderRadius: 1,
        minWidth: isMobile ? "100%" : "160px",
        height: isMobile ? "auto" : "fit-content",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        gap: isSmallMobile ? 0.5 : isMobile ? 1.5 : 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.125rem", md: "1.25rem" },
            color: "primary.light",
          }}
        >
          {`Question ${index + 1}`}
        </Typography>
      </Box>

      {!isMobile && CustomDivider()}
      {isMobile && CustomDivider("vertical")}

      {!showAnswers && (
        <Box
          onClick={() => toggleHighlight(index)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isHighlighted ? "grey.A700" : "secondary.main",
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
            gap: 0.5,
            flexGrow: 1,
          }}
        >
          <EmojiFlagsIcon sx={{ fontSize: "1.2rem" }} />
          <Typography variant="body2" sx={commonStyles}>
            {isHighlighted ? "Dehighlight" : "Highlight"}
          </Typography>
        </Box>
      )}

      {!showAnswers && isMobile && CustomDivider("vertical")}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: isMobile ? 0 : 0.25,
          color: "rgb(255,255,255,0.7)",
          gap: 0.5,
          flexGrow: 1,
        }}
      >
        <GradeIcon sx={{ fontSize: "1.2rem", color: "secondary.main" }} />
        <Typography variant="body2" sx={commonStyles}>
          Grade: {point}pt
        </Typography>
      </Box>
    </Box>
  );
};

export default React.memo(QuestionHeader);
