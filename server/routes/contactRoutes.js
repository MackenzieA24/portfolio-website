const express = require('express');
const router = express.Router();

// POST /api/contact - Handle contact form submissions
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        status: 'error',
        message: 'Please provide name, email, and message'
      });
    }

    // TODO: Add email validation
    // TODO: Save to database
    // TODO: Send email notification

    // Temporary success response
    res.status(200).json({
      status: 'success',
      message: 'Contact form received successfully',
      data: { name, email, subject }
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to process contact form'
    });
  }
});

module.exports = router;
