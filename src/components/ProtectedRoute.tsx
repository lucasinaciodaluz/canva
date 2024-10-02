import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  component: React.ComponentType<object>; // Tipo específico se souber os props
  path: string; // Adicionar path à interface
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);

  if (!authContext?.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Component {...rest} />;
};

export default ProtectedRoute;
