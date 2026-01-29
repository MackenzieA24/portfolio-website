// Global error handling middleware
const errorHandler = (err, req, res, next) => {
  // Log error for debugging
  console.error(`[ERROR] ${new Date().toISOString()} - ${err.name}: ${err.message}`);
  if (process.env.NODE_ENV === 'development') {
    console.error(err.stack);
  }

  // Handle specific error types
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';

  // Mongoose validation error
  if (err.name === 'ValidationError' && err.errors) {
    statusCode = 400;
    const messages = Object.values(err.errors).map(e => e.message);
    message = messages.join('. ');
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    statusCode = 400;
    message = 'Duplicate field value entered';
  }

  // Mongoose cast error (invalid ObjectId)
  if (err.name === 'CastError') {
    statusCode = 400;
    message = `Invalid ${err.path}: ${err.value}`;
  }

  // Don't leak error details in production
  const response = {
    status: statusCode >= 500 ? 'error' : 'fail',
    message: statusCode >= 500 && process.env.NODE_ENV === 'production'
      ? 'Something went wrong'
      : message,
  };

  // Include stack trace only in development
  if (process.env.NODE_ENV === 'development') {
    response.stack = err.stack;
    response.error = err;
  }

  res.status(statusCode).json(response);
};

module.exports = errorHandler;
