/* For quizzes table (Not accessible via API to prevent hacking */

CREATE POLICY "No public insert quizzes"
ON quizzes
FOR INSERT
WITH CHECK (false);

CREATE POLICY "No public update quizzes"
ON quizzes
FOR UPDATE
USING (false);

CREATE POLICY "No public delete quizzes"
ON quizzes
FOR DELETE
USING (false);


/* For questions table */

CREATE POLICY "No public insert questions"
ON questions
FOR INSERT
WITH CHECK (false);

CREATE POLICY "No public update questions"
ON questions
FOR UPDATE
USING (false);

CREATE POLICY "No public delete questions"
ON questions
FOR DELETE
USING (false);