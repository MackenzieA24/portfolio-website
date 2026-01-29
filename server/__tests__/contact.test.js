const request = require('supertest');
const app = require('../server');

describe('Contact API', () => {
  describe('POST /api/contact', () => {
    it('should accept valid contact form submission', async () => {
      const response = await request(app)
        .post('/api/contact')
        .send({
          name: 'Test User',
          email: 'test@example.com',
          subject: 'Test Subject',
          message: 'This is a test message with sufficient length.'
        });

      expect(response.status).toBe(200);
      expect(response.body.status).toBe('success');
    });

    it('should reject submission with missing required fields', async () => {
      const response = await request(app)
        .post('/api/contact')
        .send({
          name: 'Test User'
        });

      expect(response.status).toBe(400);
      expect(response.body.status).toBe('error');
    });

    it('should reject submission with invalid email', async () => {
      const response = await request(app)
        .post('/api/contact')
        .send({
          name: 'Test User',
          email: 'invalid-email',
          message: 'This is a test message with sufficient length.'
        });

      expect(response.status).toBe(400);
      expect(response.body.errors).toContainEqual(
        expect.objectContaining({ field: 'email' })
      );
    });

    it('should reject message that is too short', async () => {
      const response = await request(app)
        .post('/api/contact')
        .send({
          name: 'Test User',
          email: 'test@example.com',
          message: 'Short'
        });

      expect(response.status).toBe(400);
    });

    it('should accept submission without optional subject', async () => {
      const response = await request(app)
        .post('/api/contact')
        .send({
          name: 'Test User',
          email: 'test@example.com',
          message: 'This is a test message with sufficient length.'
        });

      expect(response.status).toBe(200);
      expect(response.body.data.subject).toBe('(No subject)');
    });
  });

  describe('GET /api/health', () => {
    it('should return healthy status', async () => {
      const response = await request(app).get('/api/health');

      expect(response.status).toBe(200);
      expect(response.body.status).toBe('success');
      expect(response.body.message).toBe('Portfolio API is running');
    });
  });

  describe('GET /', () => {
    it('should return API info', async () => {
      const response = await request(app).get('/');

      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Portfolio Website API');
      expect(response.body.version).toBe('1.0.0');
    });
  });

  describe('404 handling', () => {
    it('should return 404 for unknown routes', async () => {
      const response = await request(app).get('/api/unknown');

      expect(response.status).toBe(404);
      expect(response.body.status).toBe('error');
      expect(response.body.message).toBe('Route not found');
    });
  });
});
