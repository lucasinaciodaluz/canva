import axios from 'axios';

const API_URL = '/api/login/authenticate';


interface LoginResponse {
  token: string;
  userEmail: string;
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const response = await axios.post<LoginResponse>(API_URL, formData, {});

    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userEmail', response.data.userEmail);
    }

    return response.data;
  } catch (error) {
    console.error('Erro durante a autenticação:', error);
    throw error;
  }
};

export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

export const getEmail = (): string | null => {
  return localStorage.getItem('userEmail');
};

export const redirectToLogin = () => {
  const url = `${
      window.location.hostname === 'localhost' ? 'https://staging.dev.rapidcanvas.net' : window.location.origin
  }/auth/sign-in?dataappurl=${window.location.href}`;
  window.location.href = url;
};