import axios from 'axios';

// In production (Vercel), use relative URLs. In development, use local Express server.
const API_BASE_URL = import.meta.env.VITE_API_URL ?? '';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

// Error types for better handling
export class ApiError extends Error {
  constructor(message, status, errors = []) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.errors = errors;
  }
}

// Transform API errors into consistent format
const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error
    const { data, status } = error.response;
    const message = data?.message || 'An error occurred';
    const errors = data?.errors || [];
    throw new ApiError(message, status, errors);
  } else if (error.request) {
    // Request made but no response
    throw new ApiError('Unable to reach server. Please check your connection.', 0);
  } else {
    // Request setup error
    throw new ApiError(error.message || 'An unexpected error occurred', 0);
  }
};

// Contact form submission
export const submitContactForm = async (formData) => {
  try {
    const response = await api.post('/api/contact', formData);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Health check
export const checkHealth = async () => {
  try {
    const response = await api.get('/api/health');
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export default api;
