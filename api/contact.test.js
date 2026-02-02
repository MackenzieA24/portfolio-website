import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Use vi.hoisted to define mock before vi.mock runs
const { mockSend } = vi.hoisted(() => ({
  mockSend: vi.fn()
}));

// Mock Resend module with a class
vi.mock('resend', () => ({
  Resend: class {
    constructor() {
      this.emails = { send: mockSend };
    }
  }
}));

// Import handler after mocking
import handler from './contact.js';

// Helper to create mock req/res
const createMockReqRes = (body = {}, method = 'POST') => {
  const req = { method, body };
  const res = {
    status: vi.fn().mockReturnThis(),
    json: vi.fn().mockReturnThis(),
  };
  return { req, res };
};

describe('Contact API Handler', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockSend.mockResolvedValue({ data: { id: 'test-id' }, error: null });
    process.env.RESEND_API_KEY = 'test-api-key';
    process.env.CONTACT_EMAIL = 'test@example.com';
  });

  afterEach(() => {
    delete process.env.RESEND_API_KEY;
    delete process.env.CONTACT_EMAIL;
  });

  describe('HTTP Method Validation', () => {
    it('should reject non-POST requests', async () => {
      const { req, res } = createMockReqRes({}, 'GET');

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(405);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ status: 'error', message: 'Method not allowed' })
      );
    });
  });

  describe('Input Validation', () => {
    it('should reject missing name', async () => {
      const { req, res } = createMockReqRes({
        email: 'test@example.com',
        message: 'This is a test message'
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 'error',
          errors: expect.arrayContaining([
            expect.objectContaining({ field: 'name' })
          ])
        })
      );
    });

    it('should reject name that is too short', async () => {
      const { req, res } = createMockReqRes({
        name: 'A',
        email: 'test@example.com',
        message: 'This is a test message'
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
    });

    it('should reject invalid email', async () => {
      const { req, res } = createMockReqRes({
        name: 'Test User',
        email: 'not-an-email',
        message: 'This is a test message'
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          errors: expect.arrayContaining([
            expect.objectContaining({ field: 'email' })
          ])
        })
      );
    });

    it('should reject message that is too short', async () => {
      const { req, res } = createMockReqRes({
        name: 'Test User',
        email: 'test@example.com',
        message: 'Short'
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          errors: expect.arrayContaining([
            expect.objectContaining({ field: 'message' })
          ])
        })
      );
    });
  });

  describe('Successful Submission', () => {
    it('should accept valid submission with all fields', async () => {
      const { req, res } = createMockReqRes({
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test Subject',
        message: 'This is a valid test message with enough characters.'
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 'success',
          message: 'Message sent successfully'
        })
      );
      expect(mockSend).toHaveBeenCalled();
    });

    it('should accept submission without optional subject', async () => {
      const { req, res } = createMockReqRes({
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a valid test message with enough characters.'
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ subject: '(No subject)' })
        })
      );
    });
  });

  describe('Error Handling', () => {
    it('should return 500 when RESEND_API_KEY is missing', async () => {
      delete process.env.RESEND_API_KEY;

      const { req, res } = createMockReqRes({
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a valid test message with enough characters.'
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ message: 'Email service not configured' })
      );
    });

    it('should return 500 when Resend returns an error', async () => {
      mockSend.mockResolvedValue({ data: null, error: { message: 'API Error' } });

      const { req, res } = createMockReqRes({
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a valid test message with enough characters.'
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ message: 'Failed to send email' })
      );
    });
  });
});
