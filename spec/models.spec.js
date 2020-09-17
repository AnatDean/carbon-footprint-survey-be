const chai = require('chai');
const assertArrays = require('chai-arrays');
const { expect } = chai;
const { selectQuestionById, selectQuestions } = require('../models/');
const { describe } = require('mocha');
chai.use(assertArrays);
describe('models', () => {
  describe('selectQuestionById', () => {
    it('returns the correct question with possible answers', async () => {
      const result = await selectQuestionById(2);
      expect(result.question).to.equal('How big are your portions sizes?');
      expect(result.answers).to.be.containingAllOf([
        'Smaller than average',
        'Average',
        'Larger than average',
        "I'm not sure",
      ]);
    });
    it('throws an error if you provide a bad / not existing id', async () => {
      return selectQuestionById(200)
        .then(Promise.reject)
        .catch((err) => {
          expect(err.status).to.equal(404);
          expect(err.msg).to.equal('Not Found');
        });
    });
  });
  describe('selectQuestions', () => {
    it('returns list of all questions', async () => {
      const result = await selectQuestions();
      expect(result).to.be.ofSize(4);
      expect(result).to.deep.include({
        question_id: 3,
        question: 'How much food ends up wasted in your household?',
      });
    });
    
  });
});
