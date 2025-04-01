import {
  Box,
  Divider,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { useQuizStateStore } from "../store/QuizStateStore";
import { getResponsiveFontSize } from "./OptionsUtils";

interface DropDownListProps {
  options: string[];
  dropdownItems: string[];
  selectedAnswers: number[];
  correctAnswers: number[];
  onSelect: (itemIndex: number, selectedIndex: number) => void;
}

const DropDownList: React.FC<DropDownListProps> = ({
  options,
  dropdownItems,
  selectedAnswers,
  correctAnswers,
  onSelect,
}) => {
  const showAnswers = useQuizStateStore((state) => state.showAnswers);

  const responsiveFontSize = getResponsiveFontSize();

  const hasWrongAnswers =
    showAnswers &&
    options.some((_, index) => {
      const selectedIndex = selectedAnswers[index];
      return (
        selectedIndex !== correctAnswers[index] || selectedIndex === undefined
      );
    });

  return (
    <Box p={1}>
      {options.map((opt, index) => {
        const selectedIndex = selectedAnswers[index];
        const correctIndex = correctAnswers[index];
        const isCorrect = selectedIndex === correctIndex;
        const isWrongOrUnanswered = !isCorrect || selectedIndex === undefined;

        return (
          <React.Fragment key={index}>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  mr: "10px",
                  flexShrink: 0,
                  maxWidth: "50%",
                  ...responsiveFontSize,
                }}
              >
                {opt}
              </Typography>

              <FormControl
                variant="outlined"
                size="small"
                sx={{
                  width: { xs: "40%", md: "200px" },
                  position: "relative",
                  pointerEvents: showAnswers ? "none" : "auto",
                  opacity: showAnswers ? 0.85 : 1,
                  fieldset: {
                    borderWidth: showAnswers ? "2px" : "1px",
                    borderColor: showAnswers
                      ? isCorrect
                        ? "success.dark"
                        : "primary.dark"
                      : "default",
                  },
                }}
              >
                {showAnswers && isWrongOrUnanswered && (
                  <Typography
                    sx={{
                      color: "error.dark",
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                      position: "absolute",
                      top: { xs: "-9px", md: "-10px" },
                      zIndex: 1,
                      left: "5px",
                    }}
                  >
                    *
                  </Typography>
                )}
                <Select
                  value={showAnswers ? correctIndex : selectedIndex ?? ""}
                  onChange={(e) => onSelect(index, e.target.value as number)}
                  displayEmpty
                  sx={{ ...responsiveFontSize }}
                >
                  <MenuItem disabled value="" sx={{ ...responsiveFontSize }}>
                    <em style={{ opacity: 0.7 }}>Sélectionner...</em>
                  </MenuItem>
                  {dropdownItems.map((item, itemIndex) => (
                    <MenuItem
                      key={itemIndex}
                      value={itemIndex}
                      sx={{ ...responsiveFontSize, py: { xs: 0, md: 0.75 } }}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Divider sx={{ my: 1.5 }} />
          </React.Fragment>
        );
      })}
      {showAnswers && hasWrongAnswers && (
        <Typography
          sx={{
            color: "error.dark",
            fontSize: { xs: "0.65rem", md: "0.8rem" },
            fontStyle: "italic",
          }}
        >
          * indicates the corrected option for a previously incorrect selection
        </Typography>
      )}
    </Box>
  );
};

export default DropDownList;
