import { createContext, useState, useEffect, ReactNode, FC } from 'react';
import { getToken } from '../services/authService';

interface AuthContextType {
  isAuthenticated: boolean;
  setAuthenticated: (auth: boolean) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  return (
      <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
        {children}
      </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
