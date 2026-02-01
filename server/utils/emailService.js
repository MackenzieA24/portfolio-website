const nodemailer = require('nodemailer');

// Create reusable transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

/**
 * Send contact form notification email
 * @param {Object} contactData - The contact form data
 * @param {string} contactData.name - Sender's name
 * @param {string} contactData.email - Sender's email
 * @param {string} contactData.subject - Email subject
 * @param {string} contactData.message - Email message
 * @returns {Promise<Object>} - Nodemailer response
 */
async function sendContactEmail({ name, email, subject, message }) {
  const toEmail = process.env.CONTACT_EMAIL;

  if (!toEmail || !process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error('Email configuration missing');
  }

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: toEmail,
    subject: `Portfolio Contact: ${subject || 'New Message'}`,
    replyTo: email,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #22d3ee;">New Contact Form Submission</h2>
        <hr style="border: 1px solid #1a1a24;" />
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || '(No subject)'}</p>
        <hr style="border: 1px solid #1a1a24;" />
        <h3>Message:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
        <hr style="border: 1px solid #1a1a24;" />
        <p style="color: #666; font-size: 12px;">
          This email was sent from your portfolio website contact form.
        </p>
      </div>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
}

module.exports = { sendContactEmail };
