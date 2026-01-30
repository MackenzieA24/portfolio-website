const express = require('express');
const router = express.Router();
const { contactLimiter } = require('../middleware/rateLimiter');
const { contactValidationRules, validate } = require('../middleware/validators');
const { sendContactEmail } = require('../utils/emailService');

// POST /api/contact - Handle contact form submissions
router.post('/',
  contactLimiter,
  contactValidationRules,
  validate,
  async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      // Send email notification
      await sendContactEmail({ name, email, subject, message });

      res.status(200).json({
        status: 'success',
        message: 'Message sent successfully',
        data: { name, email, subject: subject || '(No subject)' }
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({
        status: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    }
  }
);

module.exports = router;
