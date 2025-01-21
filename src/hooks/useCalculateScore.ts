import Question from "../entities/Question";

export const useCalculateScore = (
  questions: Question[],
  answers: Record<number, number[]>
) => {
  let totalScore = 0;
  const correctQuestions: number[] = [];

  Object.entries(answers).forEach(([qIndex, selectedAnswers]) => {
    const question = questions[parseInt(qIndex)];
    const correctAnswers = question.correctAnswers;
    const points = question.point;

    if (!selectedAnswers || selectedAnswers.length === 0) return;

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
  });

  return {
    totalScore: parseFloat(totalScore.toFixed(2)),
    correctQuestions,
  };
};
