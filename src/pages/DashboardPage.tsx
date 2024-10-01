import Header from '../components/Header';
import Sidebar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import EmptyState from '../components/EmptyState';

function Dashboard() {
	return (
		<div className="flex h-screen">
			<Sidebar />
			<div className="flex-1 p-8">
				<Header userName="Roberto Pinheiro" />
				<SearchBar />
				<EmptyState />
			</div>
		</div>
	);
}

export default Dashboard;
