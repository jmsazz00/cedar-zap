import CloseIcon from "@mui/icons-material/Close";
import DoneOutlineSharpIcon from "@mui/icons-material/DoneOutlineSharp";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";

export const getResponsiveFontSize = () => {
  return {
    fontSize: { xs: "0.85rem", sm: "0.925rem", md: "1rem" },
  };
};

export const getOptionStyles = (
  index: number,
  hoveredOption: number | null,
  correctAnswers: number[],
  selectedAnswers: number[],
  showAnswers: boolean
) => {
  const isCorrect = correctAnswers.includes(index);
  const isSelected = selectedAnswers.includes(index);
  const isUnselectedCorrect = isCorrect && !isSelected;
  const isHovered = hoveredOption === index;

  const baseStyles = {
    my: 0.75,
    borderRadius: 1,
    pl: 0,
    transition: "border 0.2s ease, box-shadow 0.2s ease",
    "&.Mui-disabled": {
      opacity: 0.85,
    },
    "&:hover": {
      bgcolor: "#222", // Prevent default hover effect
    },
  };

  if (showAnswers) {
    const answerStyles = {
      bgcolor: isSelected
        ? isCorrect
          ? "success.dark"
          : "error.dark"
        : isUnselectedCorrect
        ? "primary.dark"
        : "#222",
    };
    return { ...baseStyles, ...answerStyles };
  }

  const hoverStyles = isHovered
    ? {
        border: "1.5px solid rgba(211, 211, 211, 0.2)", // Soft light blue border
        boxShadow: "0 0 4px 2px rgba(211, 211, 211, 0.1)", // Subtle glow
      }
    : {
        border: "1.5px solid transparent", // No border for idle state
      };

  return {
    ...baseStyles,
    bgcolor: "#222",
    ...hoverStyles,
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
  const isUnselectedCorrect = isCorrect && !isSelected;

  const sharedStyles = {
    ml: { xs: 1, md: 1.5 },
    mr: 1.2,
    my: { xs: 0.75, md: 1.1 },
  };

  if (showAnswers) {
    if ((isSelected && isCorrect) || isUnselectedCorrect)
      return (
        <DoneOutlineSharpIcon
          fontSize="small"
          sx={{
            color: isUnselectedCorrect ? "primary.light" : "success.light",
            ...sharedStyles,
          }}
        />
      );

    if (isSelected && !isCorrect)
      return (
        <CloseIcon
          fontSize="small"
          sx={{ color: "error.light", ...sharedStyles }}
        />
      );
  }

  const commonStyles = {
    py: { xs: 0.75, md: 1.1 },
    "& .MuiSvgIcon-root": {
      fontSize: { xs: "1.25rem", md: "1.5rem" }, // Adjust radio/checkbox size
    },
  };

  return isMultipleChoice ? (
    <Checkbox
      checked={selectedAnswers.includes(index)}
      disabled={showAnswers}
      sx={commonStyles}
    />
  ) : (
    <Radio
      checked={selectedAnswers.includes(index)}
      disabled={showAnswers}
      value={index}
      sx={commonStyles}
    />
  );
};
