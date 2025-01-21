import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useCheckMobileScreen } from "../hooks/useCheckMobileScreen";
import { useQuizStateStore } from "../store/QuizStateStore";
import { getOptionStyles, renderIcon } from "./OptionsUtils";

interface OptionListProps {
  options: string[];
  selectedAnswers: number[];
  correctAnswers: number[];
  isMultipleChoice: boolean;
  onSelect: (index: number) => void;
}

const OptionList: React.FC<OptionListProps> = ({
  options,
  selectedAnswers,
  correctAnswers,
  isMultipleChoice,
  onSelect,
}) => {
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);
  const listRef = React.useRef<HTMLUListElement | null>(null);

  const { isMobile } = useCheckMobileScreen();

  const showAnswers = useQuizStateStore((state) => state.showAnswers);

  useEffect(() => {
    setHoveredOption(null);
    if (isMobile) return;
    if (listRef.current) listRef.current.focus();
  }, [onSelect]);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      return;
    }

    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      const nextIndex =
        event.key === "ArrowUp"
          ? Math.max(
              0,
              (hoveredOption ??
                selectedAnswers[selectedAnswers.length - 1] ??
                0) - 1
            )
          : Math.min(
              options.length - 1,
              (hoveredOption ??
                selectedAnswers[selectedAnswers.length - 1] ??
                -1) + 1
            );
      setHoveredOption(nextIndex);

      event.preventDefault();
    }

    if (event.key === "Enter" && hoveredOption !== null) {
      onSelect(hoveredOption);
      setHoveredOption(null);
    }
  };

  return (
    <List
      ref={listRef}
      onKeyDown={(e) => handleKeyPress(e)}
      tabIndex={0}
      sx={{ outline: "none", py: 0 }}
    >
      {options.map((option, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton
            onClick={() => onSelect(index)}
            selected={selectedAnswers.includes(index) && !showAnswers}
            disabled={showAnswers}
            sx={{
              ...getOptionStyles(
                index,
                hoveredOption,
                correctAnswers,
                selectedAnswers,
                showAnswers
              ),
            }}
            onMouseEnter={() => setHoveredOption(index)}
            onMouseLeave={() => setHoveredOption(null)}
          >
            {renderIcon(
              index,
              showAnswers,
              correctAnswers,
              selectedAnswers,
              isMultipleChoice
            )}
            <ListItemText
              primary={option}
              primaryTypographyProps={{
                sx: {
                  fontSize: { xs: "0.85rem", sm: "0.925rem", md: "1rem" },
                },
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default OptionList;
