import SimplifiedQuestion from "../entities/SimplifiedQuestion";

export const useCalculateScore = (
  questions: SimplifiedQuestion[],
  answers: Record<number, number[]>
) => {
  let totalScore = 0;
  const correctQuestions: number[] = [];

  Object.entries(answers).forEach(([qIndex, selectedAnswers]) => {
    const question = questions[parseInt(qIndex)];
    const correctAnswers = question.correctAnswers;
    const points = question.point;

    if (!selectedAnswers || selectedAnswers.length === 0) return;

    if (question.type === "dropdown") {
      // Dropdown question logic
      const numOptions = correctAnswers.length;
      const pointsPerOption = points / numOptions;
      let dropdownScore = 0;

      selectedAnswers.forEach((selected, index) => {
        if (selected === correctAnswers[index])
          dropdownScore += pointsPerOption;
      });

      if (dropdownScore > 0) correctQuestions.push(parseInt(qIndex));
      totalScore += dropdownScore;
    } else {
      // Single/Multi-choice questions logic
      const correctSelections = selectedAnswers.filter((ans) =>
        correctAnswers.includes(ans)
      ).length;

      const incorrectSelections = selectedAnswers.filter(
        (ans) => !correctAnswers.includes(ans)
      ).length;

      const effectiveCorrectAnswers = Math.max(
        0,
        correctSelections - incorrectSelections
      );

      const questionScore =
        (effectiveCorrectAnswers / correctAnswers.length) * points;

      if (questionScore > 0) correctQuestions.push(parseInt(qIndex));
      totalScore += questionScore;
    }
  });

  return {
    totalScore: parseFloat(totalScore.toFixed(2)),
    correctQuestions,
  };
};
