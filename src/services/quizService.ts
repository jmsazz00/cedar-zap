import { supabase } from "../lib/supabase";
import Quiz from "../entities/Quiz";
import Question from "../entities/Question";

interface QuizRow {
  id: string;
  code: string;
  name: string;
  specialty: string;
  specialty_year: number;
  academic_year: string;
  duration: number;
  questions_count: number;
}

interface QuestionRow {
  id: string;
  quiz_id: string;
  index: number;
  question: string;
  options: string[];
  correct_answers: number[];
  point: number;
  type: string;
  dropdown_items?: string[] | null;
}

const mapQuizRowToQuiz = (row: QuizRow): Quiz => ({
  id: row.id,
  code: row.code,
  name: row.name,
  specialty: row.specialty,
  specialtyYear: row.specialty_year,
  year: row.academic_year,
  duration: row.duration,
  questions: row.questions_count,
});

const mapQuestionRowToQuestion = (row: QuestionRow): Question => ({
  index: row.index,
  question: row.question,
  options: row.options,
  point: row.point,
  correctAnswers: row.correct_answers,
  type: row.type as any,
  dropdownItems: row.dropdown_items || undefined,
});

export const quizService = {
  async getAllQuizzes(): Promise<Quiz[]> {
    const { data, error } = await supabase
      .from("quizzes")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      throw new Error(`Failed to fetch quizzes: ${error.message}`);
    }

    if (!data) {
      return [];
    }

    return (data as QuizRow[]).map(mapQuizRowToQuiz);
  },

  async getQuizById(id: string): Promise<Quiz | null> {
    const { data, error } = await supabase
      .from("quizzes")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) {
      throw new Error(`Failed to fetch quiz: ${error.message}`);
    }

    if (!data) {
      return null;
    }

    return mapQuizRowToQuiz(data as QuizRow);
  },

  async getQuizzesBySpecialty(specialty: string): Promise<Quiz[]> {
    const { data, error } = await supabase
      .from("quizzes")
      .select("*")
      .eq("specialty", specialty)
      .order("specialty_year", { ascending: true });

    if (error) {
      throw new Error(
        `Failed to fetch quizzes by specialty: ${error.message}`
      );
    }

    if (!data) {
      return [];
    }

    return (data as QuizRow[]).map(mapQuizRowToQuiz);
  },

  async getQuestionsByQuizId(quizId: string): Promise<Question[]> {
    const { data, error } = await supabase
      .from("questions")
      .select("*")
      .eq("quiz_id", quizId)
      .order("index", { ascending: true });

    if (error) {
      throw new Error(
        `Failed to fetch questions for quiz: ${error.message}`
      );
    }

    if (!data) {
      return [];
    }

    return (data as QuestionRow[]).map(mapQuestionRowToQuestion);
  },

  async getQuizWithQuestions(
    quizId: string
  ): Promise<{ quiz: Quiz; questions: Question[] } | null> {
    const quiz = await this.getQuizById(quizId);
    if (!quiz) {
      return null;
    }

    const questions = await this.getQuestionsByQuizId(quizId);
    return { quiz, questions };
  },
};
