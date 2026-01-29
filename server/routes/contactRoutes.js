const express = require('express');
const router = express.Router();
const { contactLimiter } = require('../middleware/rateLimiter');
const { contactValidationRules, validate } = require('../middleware/validators');

// POST /api/contact - Handle contact form submissions
router.post('/',
  contactLimiter,
  contactValidationRules,
  validate,
  async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      // TODO: Save to database
      // TODO: Send email notification

      res.status(200).json({
        status: 'success',
        message: 'Contact form received successfully',
        data: { name, email, subject: subject || '(No subject)' }
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({
        status: 'error',
        message: 'Failed to process contact form'
      });
    }
  }
);

module.exports = router;
