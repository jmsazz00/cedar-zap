import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { getOptionStyles, renderIcon } from "./OptionsUtils";

interface OptionListProps {
  options: string[];
  selectedAnswers: number[];
  correctAnswers: number[];
  showAnswers: boolean;
  isMultipleChoice: boolean;
  onSelect: (index: number) => void;
}

const OptionList: React.FC<OptionListProps> = ({
  options,
  selectedAnswers,
  correctAnswers,
  showAnswers,
  isMultipleChoice,
  onSelect,
}) => {
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);
  const listRef = React.useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (listRef.current) listRef.current.focus();
    setHoveredOption(null);
  }, [onSelect]);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      return;
    }

    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      const nextIndex =
        event.key === "ArrowUp"
          ? Math.max(0, (hoveredOption ?? selectedAnswers[0] ?? 0) - 1)
          : Math.min(
              options.length - 1,
              (hoveredOption ?? selectedAnswers[0] ?? -1) + 1
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
      sx={{ outline: "none" }}
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
            <ListItemText primary={option} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default OptionList;
