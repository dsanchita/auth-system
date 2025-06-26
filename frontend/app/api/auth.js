import axios from 'axios';
import { API_BASE_URL } from '../lib/constants';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Request interceptor for auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post(`${API_BASE_URL}token/refresh/`, {
          refresh: refreshToken
        });
        
        localStorage.setItem('accessToken', response.data.access);
        originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
        return api(originalRequest);
      } catch (err) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/auth/login';
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export const register = async (data) => {
  const response = await api.post('/register/', data);
  return response.data;
};

export const login = async (data) => {
  const response = await api.post('/login/', data);
  return response.data;
};

export const logout = async (refreshToken) => {
  const response = await api.post('/logout/', { refresh_token: refreshToken });
  return response.data;
};

export const getUserProfile = async () => {
  const response = await api.get('/profile/');
  return response.data;
};