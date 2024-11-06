import { Button } from "@mui/material";
import React from "react";

interface AnswerResetButtonProps {
  resetAnswer: () => void;
}

const AnswerResetButton: React.FC<AnswerResetButtonProps> = ({
  resetAnswer,
}) => (
  <Button onClick={resetAnswer} variant="outlined">
    Remove my answer
  </Button>
);

export default AnswerResetButton;
