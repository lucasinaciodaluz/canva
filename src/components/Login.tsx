import React, { useState } from 'react';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Função que lida com o envio do formulário
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Limpa mensagens de erro anteriores
    try {
      await login(email, password);
      navigate('/'); // Redireciona para o Dashboard
    } catch (error) {
      setError('Falha no login. Verifique suas credenciais.');
      console.error(error);
    }
  };

  return (
      <div className="login-container">
        <div className="login-box">
          <h2>CanvasOps</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Username:</label>
              <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
            </div>
            <div className="input-group">
              <label>Password:</label>
              <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
  );
};

export default Login;
