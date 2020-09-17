exports.formatQuestionObject = (questionWithAnswersArray) => {
  return questionWithAnswersArray.reduce(
    (questionObject, { answer }) => {
      questionObject.answers.push(answer);
      return questionObject;
    },
    {
      question_id: questionWithAnswersArray[0].question_id,
      question: questionWithAnswersArray[0].question,
      answers: [],
    }
  );
};
