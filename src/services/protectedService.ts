import { apiClient } from './apiService';

// Exemplo de como buscar dados protegidos
export const getProtectedData = async () => {
  try {
    const response = await apiClient.get('/api/protected/data');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados protegidos:', error);
    throw error;
  }
};
