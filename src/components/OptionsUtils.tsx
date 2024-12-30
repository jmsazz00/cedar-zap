import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";

export const getOptionStyles = (
  index: number,
  hoveredOption: number | null,
  correctAnswers: number[],
  selectedAnswers: number[],
  showAnswers: boolean
) => {
  const isCorrect = correctAnswers.includes(index);
  const isSelected = selectedAnswers.includes(index);

  const commonStyles = {
    my: 0.7,
    borderRadius: 1,
    pl: 0,
    "&.Mui-disabled": {
      opacity: 0.85,
    },
  };

  if (showAnswers) {
    return {
      ...commonStyles,
      bgcolor: isCorrect ? "success.dark" : isSelected ? "error.dark" : "#222",
      color: isCorrect || isSelected ? "common.white" : "inherit",
    };
  }

  return {
    ...commonStyles,
    bgcolor: hoveredOption === index ? "#3f3f3f" : "#222",
  };
};

export const renderIcon = (
  index: number,
  showAnswers: boolean,
  correctAnswers: number[],
  selectedAnswers: number[],
  isMultipleChoice: boolean
) => {
  const isCorrect = correctAnswers.includes(index);
  const isSelected = selectedAnswers.includes(index);

  if (showAnswers) {
    if (isCorrect)
      return (
        <CheckCircleIcon
          fontSize="small"
          sx={{ color: "success.light", ml: 1.5, mr: 1.2 }}
        />
      );

    if (isSelected && !isCorrect)
      return (
        <CancelIcon
          fontSize="small"
          sx={{ color: "error.light", ml: 1.5, mr: 1.2 }}
        />
      );
  }

  return isMultipleChoice ? (
    <Checkbox
      checked={selectedAnswers.includes(index)}
      disabled={showAnswers}
    />
  ) : (
    <Radio
      checked={selectedAnswers.includes(index)}
      disabled={showAnswers}
      value={index}
    />
  );
};
