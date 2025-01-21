import { Button } from "@mui/material";
import React from "react";
import { useCheckMobileScreen } from "../hooks/useCheckMobileScreen";

interface AnswerResetButtonProps {
  resetAnswer: () => void;
}

const AnswerResetButton: React.FC<AnswerResetButtonProps> = ({
  resetAnswer,
}) => {
  const { isMobile } = useCheckMobileScreen();

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
