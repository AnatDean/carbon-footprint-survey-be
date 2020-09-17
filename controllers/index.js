const { selectQuestions, selectQuestionById } = require('../models/');

exports.getQuestions = (req, res, next) => {
  selectQuestions()
    .then((questions) => {
      const questionPromises = questions.map(({ question_id }) => {
        return selectQuestionById(question_id);
      });
      return Promise.all(questionPromises);
    })
    .then((questions) => res.status(200).send({ questions }));
};

exports.getQuestionById = (req, res, next) => {
  selectQuestionById(req.params.question_id)
    .then((question) => res.status(200).send(question))
    .catch(next);
};
