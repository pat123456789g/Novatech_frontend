import axios from 'axios';

const api = axios.create({
  baseURL: 'https://novatech-backend-9kqw.onrender.com:8000', // This points to your Django backend
 // baseURL: 'http://localhost:8000', // This points to your Django backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// ... rest of your interceptor code stays the same ...

export default api;
