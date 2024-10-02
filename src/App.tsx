import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from "./pages/DashboardPage.tsx";

const App: React.FC = () => {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					{/* Rota pública de login */}
					<Route path="/login" element={<Login />} />
					{/* Rota protegida */}
					<Route path="/" element={<ProtectedRoute component={Dashboard} path={'/'} />} />
				</Routes>
			</Router>
		</AuthProvider>
	);
};

export default App;
