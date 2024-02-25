import request from 'supertest';
import server from '../app';
// Close the server after the tests
afterAll(() => {
  server.close();
});

describe('Message Board API', () => {
  describe('GET /channels', () => {
    test('should return a list of channels', async () => {
      const response = await request(server).get('/api/channels');
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });

  describe('GET /messages/:channelId', () => {
    test('should return messages of the specified channel', async () => {
      const channelId = 'MarketInsights';
      const response = await request(server).get(`/api/messages/${channelId}`);
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });

    test('should return 404 for a non-existent channel', async () => {
      const channelId = 'NonExistentChannel';
      const response = await request(server).get(`/api/messages/${channelId}`);
      expect(response.statusCode).toBe(404);
    });
  });

  describe('POST /:channelId', () => {
    test('should allow posting a new message to a given channel', async () => {
      const channelId = 'MarketInsights';
      const message = 'This is a test message';
      const response = await request(server)
        .post(`/api/${channelId}`)
        .send({ message });
      expect(response.statusCode).toBe(201);
      expect(response.body.addedMessage.content).toBe(message);
    });

    test('should return 404 for a non-existent channel', async () => {
      const channelId = 'NonExistentChannel';
      const message = 'This is a test message';
      const response = await request(server)
        .post(`/api/${channelId}`)
        .send({ message });
      expect(response.statusCode).toBe(404);
    });

    test('should return 400 for invalid message data', async () => {
      const channelId = 'MarketInsights';
      const response = await request(server)
        .post(`/api/${channelId}`)
        .send({ message: '' });
      expect(response.statusCode).toBe(400);
    });
  });
});
