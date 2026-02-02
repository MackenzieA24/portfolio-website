import { Resend } from 'resend';

// Lazy initialization for testability
let resend;
function getResendClient() {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

// Simple validation
function validateInput({ name, email, message }) {
  const errors = [];

  if (!name || name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push({ field: 'email', message: 'Valid email is required' });
  }

  if (!message || message.trim().length < 10) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters' });
  }

  return errors;
}

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    const errors = validateInput({ name, email, message });
    if (errors.length > 0) {
      return res.status(400).json({ status: 'error', message: 'Validation failed', errors });
    }

    // Check for API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return res.status(500).json({ status: 'error', message: 'Email service not configured' });
    }

    // Send email via Resend
    const { data, error } = await getResendClient().emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'delivered@resend.dev',
      subject: `Portfolio Contact: ${subject || 'New Message'}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #22d3ee;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #e2e8f0;" />
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || '(No subject)'}</p>
          <hr style="border: 1px solid #e2e8f0;" />
          <h3>Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
          <hr style="border: 1px solid #e2e8f0;" />
          <p style="color: #666; font-size: 12px;">
            This email was sent from your portfolio website contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ status: 'error', message: 'Failed to send email' });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Message sent successfully',
      data: { name, email, subject: subject || '(No subject)' }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Failed to send message. Please try again later.'
    });
  }
}
