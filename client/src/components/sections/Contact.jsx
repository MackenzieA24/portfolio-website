import { useState } from 'react';
import { motion } from 'framer-motion';
import { submitContactForm } from '../../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '', errors: [] });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '', errors: [] });

    try {
      await submitContactForm(formData);
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
        errors: []
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      let message = 'Oops! Something went wrong. Please try again.';
      let errors = [];

      if (error.name === 'ApiError') {
        if (error.status === 429) {
          message = 'Too many submissions. Please wait before trying again.';
        } else if (error.status === 400 && error.errors.length > 0) {
          message = 'Please fix the following errors:';
          errors = error.errors;
        } else if (error.status === 0) {
          message = 'Unable to connect to server. Please check your internet connection.';
        } else {
          message = error.message;
        }
      }

      setStatus({ type: 'error', message, errors });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 bg-[#1a1a24] border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300";
  const labelClasses = "block text-slate-300 font-medium mb-2";

  return (
    <section id="contact" className="py-24 bg-[#12121a] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6 rounded-full" />
          <p className="text-center text-slate-400 mb-12 max-w-lg mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className={labelClasses}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className={inputClasses}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className={labelClasses}>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message..."
                className={inputClasses + " resize-none"}
              ></textarea>
            </div>

            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-lg border ${
                  status.type === 'success'
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    : 'bg-red-500/10 border-red-500/30 text-red-400'
                }`}
              >
                <p>{status.message}</p>
                {status.errors && status.errors.length > 0 && (
                  <ul className="mt-2 list-disc list-inside text-sm opacity-80">
                    {status.errors.map((err, index) => (
                      <li key={index}>{err.field}: {err.message}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium glow-button disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
