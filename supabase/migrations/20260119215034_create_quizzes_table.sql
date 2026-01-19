/*
  # Create quizzes table

  1. New Tables
    - `quizzes`
      - `id` (uuid, primary key)
      - `code` (text, unique, indexed)
      - `name` (text)
      - `specialty` (text)
      - `specialty_year` (integer)
      - `academic_year` (text)
      - `duration` (integer, in seconds)
      - `questions_count` (integer)
      - `created_at` (timestamptz)

  2. Indexes
    - Index on `code` for fast lookups
    - Index on `specialty` for filtering

  3. Constraints
    - `code` is unique
    - All fields are NOT NULL except timestamps
*/

CREATE TABLE IF NOT EXISTS quizzes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  name text NOT NULL,
  specialty text NOT NULL,
  specialty_year integer NOT NULL,
  academic_year text NOT NULL,
  duration integer NOT NULL,
  questions_count integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_quizzes_code ON quizzes(code);
CREATE INDEX IF NOT EXISTS idx_quizzes_specialty ON quizzes(specialty);
