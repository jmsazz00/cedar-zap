import { Button, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

interface AnswerResetButtonProps {
  resetAnswer: () => void;
}

const AnswerResetButton: React.FC<AnswerResetButtonProps> = ({
  resetAnswer,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Button
      onClick={resetAnswer}
      variant="outlined"
      size={isMobile ? "small" : "medium"}
    >
      Remove my answer
    </Button>
  );
};

export default AnswerResetButton;
