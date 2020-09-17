DROP DATABASE IF EXISTS survey_test;
CREATE DATABASE survey_test;

\c survey_test

CREATE TABLE questions (
  question_id SERIAL PRIMARY KEY,
  question VARCHAR
); 

CREATE TABLE answers (
  answer_id SERIAL PRIMARY KEY,
  answer VARCHAR
); 

CREATE TABLE question_answers (
  question_answer_id SERIAL PRIMARY KEY,
  question_id INT REFERENCES questions(question_id),
  answer_id INT REFERENCES answers(answer_id)
);

INSERT INTO questions (question) VALUES 
  ('How often do you eat meat and dairy?'),
  ( 'How big are your portions sizes?'),
  ('How much food ends up wasted in your household?'),
  ( 'How often do you eat avocados, asparagus, kiwi fruit or pineapples?');

INSERT INTO answers (answer) VALUES 
  ('Smaller than average'), -- 1
  ('Average'), -- 2
  ('Larger than average'), -- 3
  ('I''m not sure'), -- 4
  ('None'), -- 5
  ('1-5 plates per week'), -- 6
  ('6-10 plates per week'), -- 7
  ('More than 10 plates per week'), -- 8
  ('Daily'),  -- 9
  ('1 or 2 times'),  -- 10
  ('3+ times per week'),  -- 11
  ('Not at all');-- 12



INSERT INTO question_answers (question_id, answer_id) VALUES 
(1, 9), (1, 10),(1,11),(1,12),
(2,1),(2,2),(2,3),(2,4),
(3,5),(3,6),(3,7),(3,8),
(4, 9), (4, 10),(4,11),(4,12);