const { selectQuestions, selectQuestionById } = require('../models/');

exports.getQuestions = (req, res, next) => {

  // retrieve all questions
  selectQuestions()
    .then((questions) => {
      // populate every question with its answers
      const questionPromises = questions.map(({ question_id }) => {
        return selectQuestionById(question_id);
      });
      return Promise.all(questionPromises);
    })
    .then((questions) => res.status(200).send({ questions }));
};

exports.getQuestionById = (req, res, next) => {
  // retreive 1 question
  selectQuestionById(req.params.question_id)
    .then((question) => res.status(200).send(question))
    .catch(next);
};
