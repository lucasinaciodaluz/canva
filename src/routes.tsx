import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import CreateCodeForm from './components/CreateCodeForm';
import CauseSolution from './components/CauseSolutionForm';
import GuideList from "./components/GuideList.tsx";
import Login from "./components/Login.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import React from "react";

const AppRoutes = () => {
	return (
		<Router>
			<Routes>

				{/* Rota pública de login */}
				<Route path="/login" element={<Login />} />

				{/* Rota protegida */}
				<Route
					path="/"
					element={<ProtectedRoute component={DashboardPage} path={'/'} />}
				/>

				{/* Rota para a página de criação de código */}
				<Route
					path="/create-code"
					element={<ProtectedRoute component={CreateCodeForm} />}
				/>

				{/* Rota para a página de solução de causa */}
				<Route
					path="/cause-solution"
					element={<ProtectedRoute component={CauseSolution} />}
				/>

				<Route
					path="/artifact/:fileName"
					element={<ProtectedRoute component={GuideList} />}
				/>
			</Routes>
		</Router>
	);
};

export default AppRoutes;
