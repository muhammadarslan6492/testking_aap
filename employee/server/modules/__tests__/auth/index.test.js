import request from 'supertest';
import { app } from '../../../index';

describe('Authentication API', () => {
  test('this is test unit test', async () => {
    const response = await request(app).get('/api/v1/auth/test');

    expect(response.statusCode).toBe(200);
  });
});
