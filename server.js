const express = require('express');
const { getQuestions, getQuestionById } = require('./controllers');
const { handleErrors } = require('./errors');

const app = express();

app.get('/api/questions', getQuestions);
app.get('/api/questions/:question_id', getQuestionById);

app.use(handleErrors);

module.exports = app;
