const { expect } = require('chai');
const request = require('supertest');
const connection = require('../db/');
const app = require('../server');

describe('server', () => {
  after(() => connection.end());
  it('GET /questions responds with 200 and array of questions', async () => {
    const response = await request(app).get('/api/questions');
    expect(response.status).to.equal(200);
    expect(response.body.questions).to.deep.include({
      question_id: 3,
      question: 'How much food ends up wasted in your household?',
    });
  });
});
