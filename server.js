const express = require('express');
const { getQuestions } = require('./controllers');
const app = express();

app.get('/api/questions', getQuestions);

module.exports = app;
