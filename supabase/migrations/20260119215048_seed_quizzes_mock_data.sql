/*
  # Seed quizzes table with mock data

  This migration seeds the quizzes table with initial quiz data for testing.
  Each quiz represents a medical specialty exam at different years of study.
*/

INSERT INTO quizzes (code, name, specialty, specialty_year, academic_year, duration, questions_count)
VALUES
  ('GK01', 'General Knowledge', 'General', 1, '23-24', 600, 50),
  ('SCI02', 'Physiology Basics', 'Med', 2, '23-24', 900, 75),
  ('HIST03', 'Anatomy Fundamentals', 'Med', 1, '24-25', 480, 40),
  ('PHARM04', 'Pharmacology I', 'Med', 2, '24-25', 1200, 100),
  ('PATH05', 'Pathology Advanced', 'Med', 3, '23-24', 720, 60),
  ('NEURO06', 'Neurology Specialist', 'Specialization', 4, '24-25', 540, 45),
  ('CARDIO07', 'Cardiology Clinical', 'Specialization', 5, '23-24', 660, 55),
  ('PEDS08', 'Pediatrics Essentials', 'Med', 2, '23-24', 750, 70)
ON CONFLICT (code) DO NOTHING;
