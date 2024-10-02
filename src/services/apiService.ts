import axios from 'axios';
import { getToken } from './authService';

const API_DOMAIN = 'https://staging.dev.rapidcanvas.net';

// Cria uma instância do Axios
export const apiClient = axios.create({
  baseURL: API_DOMAIN,
});

// Interceptor para adicionar o token de autenticação
apiClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token && config.headers) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
