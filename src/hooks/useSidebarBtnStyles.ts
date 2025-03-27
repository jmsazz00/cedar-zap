import { useMemo } from "react";

export const useSidebarBtnStyles = (
  isCurrent: boolean,
  hasAnswer: boolean,
  showAnswers: boolean,
  isCorrect: boolean
) => {
  const bgcolor = useMemo(() => {
    if (isCurrent) return !showAnswers ? "primary.dark" : "background.default";
    if (hasAnswer && !showAnswers) return "grey.A100";
    return "background.default";
  }, [isCurrent, hasAnswer, showAnswers]);

  const color = useMemo(() => {
    if (showAnswers) return isCorrect ? "success.dark" : "error.dark";
    return isCurrent ? "white" : "text.secondary";
  }, [isCurrent, showAnswers, isCorrect]);

  const borderColor = useMemo(() => {
    if (!showAnswers) return "default";
    return isCurrent
      ? "var(--currentColor)"
      : isCorrect
      ? "#1b3d2d"
      : "#5c0f0f";
  }, [isCurrent, showAnswers, isCorrect]);

  return {
    height: { xs: 44, sm: 46, md: 48 },
    minWidth: { xs: 44, sm: 46, md: 48 },
    borderRadius: { xs: 1.5, md: 2 },
    fontSize: { xs: "0.825rem", sm: "0.85rem", md: "0.875rem" },
    fontWeight: "bold",
    zIndex: 2,
    overflow: "hidden",
    bgcolor,
    color,
    borderColor,
    "&:hover": {
      borderColor: showAnswers ? "var(--currentColor)" : "default",
    },
  };
};
