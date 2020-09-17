const db = require('../db/');
const { formatQuestionObject } = require('../utils');
exports.selectQuestionById = (id) => {
  return db
    .query(
      `
  SELECT questions.question_id, question, answer FROM question_answers
  JOIN questions ON 
  question_answers.question_id = questions.question_id
  JOIN answers ON 
  question_answers.answer_id = answers.answer_id
  WHERE questions.question_id = $1;
  `,
      [id]
    )
    .then(({ rows }) => {
      if (!rows.length) // if no question matches the id
        return Promise.reject({ status: 404, msg: 'Not Found' });
      else return formatQuestionObject(rows); 
    });
};

exports.selectQuestions = () => {
  return db.query(`SELECT * FROM questions;`).then(({ rows }) => rows);
};
