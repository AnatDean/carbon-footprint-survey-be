const { selectQuestions, selectQuestionById } = require('../models/');

exports.getQuestions = (req, res, next) => {
  selectQuestions().then((questions) => res.status(200).send({ questions }));
};

exports.getQuestionById = (req, res, next) => {
  selectQuestionById(req.params.question_id)
    .then((question) => res.status(200).send(question))
    .catch(next);
};
