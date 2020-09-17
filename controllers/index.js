const { selectQuestions } = require('../models/');

exports.getQuestions = (req, res, next) => {
  selectQuestions().then((questions) => res.status(200).send({ questions }))
};
