const db = require('../db/');
const { formatQuestionObject } = require('../utils');
exports.selectQuestionById = (id) => {
  return db
    .query(
      `
  SELECT question, answer FROM question_answers
  JOIN questions ON 
  question_answers.question_id = questions.question_id
  JOIN answers ON 
  question_answers.answer_id = answers.answer_id
  WHERE questions.question_id = $1;
  `,
      [id]
    )
    .then(({ rows }) => {
      return formatQuestionObject(rows);
    });
};

exports.selectQuestions = () => {
  return db.query(`SELECT * FROM questions;`).then(({ rows }) => rows);
};
