const { expect } = require('chai');
const { formatQuestionObject } = require('../utils');
describe('formatQuestionObject', () => {
  it('takes an array of question/answer objects and converts to object with nested answers array', () => {
    const question = [
      { question: 'a', answer: 'b' },
      { question: 'a', answer: 'd' },
      { question: 'a', answer: 'e' },
    ];
    expect(formatQuestionObject(question).question).to.equal('a');
    expect(formatQuestionObject(question).answers).to.eql(['b', 'd', 'e']);
  });
});
