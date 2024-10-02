import axios from 'axios';

const API_URL = '/api/login/authenticate'; // O proxy Vite cuidará do redirecionamento para o servidor real

// Tipagem da resposta de login
interface LoginResponse {
  token: string;
  userEmail: string;
  // Adicione outros campos que o backend possa retornar, se necessário
}

// Função para realizar o login
export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    // Como o backend espera um form-data, precisamos usar FormData
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const response = await axios.post<LoginResponse>(API_URL, formData, {});

    if (response.data.token) {
      // Armazena o token no localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userEmail', response.data.userEmail);
    }

    return response.data;
  } catch (error) {
    console.error('Erro durante a autenticação:', error);
    throw error;
  }
};

// Função para obter o token armazenado
export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

export const getEmail = (): string | null => {
  console.log(localStorage.getItem('userEmail'))
  return localStorage.getItem('userEmail');
};