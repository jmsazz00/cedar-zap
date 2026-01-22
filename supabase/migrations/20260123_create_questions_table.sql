/*
  # Create questions table

  1. New Tables
    - `questions`
      - `id` (uuid, primary key)
      - `quiz_id` (uuid, foreign key → quizzes.id)
      - `question_index` (integer, order inside quiz)
      - `question` (text)
      - `options` (text[])
      - `correct_answers` (integer[])
      - `type` (text)
      - `dropdown_items` (text[])
      - `point` (integer)
      - `created_at` (timestamptz)

  2. Indexes
    - Index on quiz_id
    - Unique constraint on (quiz_id, question_index)

  3. Constraints
    - Enforce valid question types
*/

CREATE TABLE IF NOT EXISTS questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),

  quiz_id uuid NOT NULL
    REFERENCES quizzes(id)
    ON DELETE CASCADE,

  question_index integer NOT NULL,
  question text NOT NULL,

  options text[] NOT NULL,
  correct_answers integer[] NOT NULL,

  type text NOT NULL
    CHECK (type IN ('single-choice', 'multiple-choice', 'dropdown')),

  dropdown_items text[],

  point integer NOT NULL DEFAULT 1,

  created_at timestamptz DEFAULT now()
);

-- Ensure correct ordering & no duplicates per quiz
CREATE UNIQUE INDEX IF NOT EXISTS idx_questions_quiz_order
  ON questions(quiz_id, question_index);

-- Speed up quiz question fetch
CREATE INDEX IF NOT EXISTS idx_questions_quiz_id
  ON questions(quiz_id);
