import Header from '../components/Header';
import Sidebar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import EmptyState from '../components/EmptyState';
import { getEmail } from "../services/authService.ts";
import { useState, useEffect } from 'react';

function Dashboard() {
	const [email, setEmail] = useState('');

	useEffect(() => {
		// Busca o email do localStorage quando o componente é montado
		const storedEmail = getEmail();
		if (storedEmail) {
			setEmail(storedEmail);
		}
	}, []);

	return (
		<div className="flex h-screen">
			<Sidebar />
			<div className="flex-1 p-8">
				<Header userName={email} />
				<SearchBar />
				<EmptyState />
			</div>
		</div>
	);
}

export default Dashboard;
