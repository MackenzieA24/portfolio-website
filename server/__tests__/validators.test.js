const { contactValidationRules } = require('../middleware/validators');
const { validationResult } = require('express-validator');

// Helper to run validators
const runValidation = async (body) => {
  const req = { body };

  for (const validation of contactValidationRules) {
    await validation.run(req);
  }

  return validationResult(req);
};

describe('Contact Validators', () => {
  describe('Valid submissions', () => {
    it('should pass with all valid fields', async () => {
      const result = await runValidation({
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Test Subject',
        message: 'This is a valid test message.'
      });
      expect(result.isEmpty()).toBe(true);
    });

    it('should pass without optional subject', async () => {
      const result = await runValidation({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a valid test message.'
      });
      expect(result.isEmpty()).toBe(true);
    });
  });

  describe('Name validation', () => {
    it('should fail with empty name', async () => {
      const result = await runValidation({
        name: '',
        email: 'john@example.com',
        message: 'This is a valid test message.'
      });
      expect(result.isEmpty()).toBe(false);
      expect(result.array().some(e => e.path === 'name')).toBe(true);
    });

    it('should fail with name too short', async () => {
      const result = await runValidation({
        name: 'J',
        email: 'john@example.com',
        message: 'This is a valid test message.'
      });
      expect(result.isEmpty()).toBe(false);
    });

    it('should fail with name too long', async () => {
      const result = await runValidation({
        name: 'A'.repeat(101),
        email: 'john@example.com',
        message: 'This is a valid test message.'
      });
      expect(result.isEmpty()).toBe(false);
    });
  });

  describe('Email validation', () => {
    it('should fail with invalid email format', async () => {
      const result = await runValidation({
        name: 'John Doe',
        email: 'not-an-email',
        message: 'This is a valid test message.'
      });
      expect(result.isEmpty()).toBe(false);
      expect(result.array().some(e => e.path === 'email')).toBe(true);
    });

    it('should fail with empty email', async () => {
      const result = await runValidation({
        name: 'John Doe',
        email: '',
        message: 'This is a valid test message.'
      });
      expect(result.isEmpty()).toBe(false);
    });
  });

  describe('Message validation', () => {
    it('should fail with message too short', async () => {
      const result = await runValidation({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Short'
      });
      expect(result.isEmpty()).toBe(false);
      expect(result.array().some(e => e.path === 'message')).toBe(true);
    });

    it('should fail with empty message', async () => {
      const result = await runValidation({
        name: 'John Doe',
        email: 'john@example.com',
        message: ''
      });
      expect(result.isEmpty()).toBe(false);
    });
  });

  describe('Sanitization', () => {
    it('should trim whitespace from inputs', async () => {
      const req = { body: { name: '  John Doe  ', email: '  john@example.com  ', message: '  This is a test message.  ' } };

      for (const validation of contactValidationRules) {
        await validation.run(req);
      }

      expect(req.body.name).toBe('John Doe');
      expect(req.body.message).toBe('This is a test message.');
    });
  });
});
