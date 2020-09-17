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
  it('GET /questions/:question_id responds with 200 and question object', async () => {
    const response = await request(app).get('/api/questions/2');
    expect(response.status).to.equal(200);
    expect(response.body.question).to.equal('How big are your portions sizes?');
  });
  it('GET /questions/ <no id> responds with 404', async () => {
    const response = await request(app).get('/api/questions/200');
    expect(response.status).to.equal(404);
    expect(response.body.msg).to.equal('Not Found');
  });
  it('GET /questions/ <bad id> responds with 400', async () => {
    const response = await request(app).get('/api/questions/bad_id');
    expect(response.status).to.equal(400);
    expect(response.body.msg).to.equal('Bad Request');
  });
});
