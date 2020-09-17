const chai = require('chai');
const assertArrays = require('chai-arrays');
const { expect } = chai;
const { getQuestionById, getQuestions } = require('../models/');
const connection = require('../db/');
const { describe } = require('mocha');
chai.use(assertArrays);
describe('models', () => {
  after(() => connection.end());
  describe('getQuestionById', () => {
    it('returns the correct question with possible answers', async () => {
      const result = await getQuestionById(2);
      expect(result.question).to.equal('How big are your portions sizes?');
      expect(result.answers).to.be.containingAllOf([
        'Smaller than average',
        'Average',
        'Larger than average',
        "I'm not sure",
      ]);
    });
  });
  describe('getQuestions', () => {
    it('returns list of all questions', async () => {
      const result = await getQuestions();
      expect(result).to.be.ofSize(4);
      expect(result).to.deep.include({
        question_id: 3,
        question: 'How much food ends up wasted in your household?',
      });
    });
  });
});
