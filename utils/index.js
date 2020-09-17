exports.formatQuestionObject = (questionWithAnswersArray) => {
  return questionWithAnswersArray.reduce(
    (questionObject, { answer }) => {
      questionObject.answers.push(answer);
      return questionObject;
    },
    { question: questionWithAnswersArray[0].question, answers: [] }
  );
};
