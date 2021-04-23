/* eslint-disable no-undef */
process.env.NODE_ENV = 'test';
const request = require('supertest');
const app = require('..');

describe('Author Controller', () => {
  afterAll(async (done) => {
    await app.close(done);
  });

  describe('GET /v1/author/:id', () => {
    test('It should get an author with id 1', async () => {
      const response = await request(app).get('/v1/author/1');

      expect(typeof response.body).toBe('object');

      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('username');
      expect(response.body).toHaveProperty('email');
      expect(response.body).toHaveProperty('city');
      expect(response.body).not.toHaveProperty('password');

      expect(response.body.id).toBe(1);
      expect(response.body.username).toBe('Marie');
      expect(response.body.email).toBe('marie@mail.fr');
      expect(response.body.city).toBe('Paris');

      expect(response.statusCode).toBe(200);
    });

    test('It should returns error if user not exist', async () => {
      const response = await request(app).get('/v1/author/9999');

      expect(typeof response.body).toBe('object');

      expect(response.body).toHaveProperty('error');
      expect(response.body).toHaveProperty('message');

      expect(response.body.error).toBe(404);
      expect(response.body.message).toBe('User not found');

      expect(response.statusCode).toBe(404);
    });
  });
});
