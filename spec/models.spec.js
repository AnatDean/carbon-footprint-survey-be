const chai = require('chai');
const assertArrays = require('chai-arrays');
const { expect } = chai;
const { getQuestionById } = require('../models/');
const connection = require('../db/');
chai.use(assertArrays);

describe('getQuestionById', () => {
  after(() => connection.end());
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
