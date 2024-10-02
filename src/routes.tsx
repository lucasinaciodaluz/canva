import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/DashboardPage';
import CreateCodeForm from './components/CreateCodeForm';
import CauseSolution from './components/CauseSolutionForm';

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				{/* Rota principal que exibe o Dashboard */}
				<Route
					path="/"
					element={<Dashboard />}
				/>

				{/* Rota para a página de criação de código */}
				<Route
					path="/create-code"
					element={<CreateCodeForm />}
				/>

				{/* Rota para a página de solução de causa */}
				<Route
					path="/cause-solution"
					element={<CauseSolution />}
				/>
			</Routes>
		</Router>
	);
};

export default AppRoutes;
