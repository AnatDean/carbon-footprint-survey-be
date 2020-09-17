const { expect } = require('chai');
const { formatQuestionObject } = require('../utils');
describe('formatQuestionObject', () => {
  it('takes an array of question/answer objects and converts to object with nested answers array', () => {
    const question = [
      { question_id: 1, question: 'a', answer: 'b' },
      { question_id: 1, question: 'a', answer: 'd' },
      { question_id: 1, question: 'a', answer: 'e' },
    ];
    expect(formatQuestionObject(question).question_id).to.equal(1);
    expect(formatQuestionObject(question).question).to.equal('a');
    expect(formatQuestionObject(question).answers).to.eql(['b', 'd', 'e']);
  });
});
