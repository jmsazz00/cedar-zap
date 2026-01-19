import { supabase } from "../lib/supabase";
import Quiz from "../entities/Quiz";

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
};
