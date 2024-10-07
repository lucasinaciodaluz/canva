import Header from '../components/Header';
import Sidebar from '../components/SideBar';
import { getEmail } from "../services/authService.ts";
import { useState, useEffect } from 'react';
import GuideList from "../components/GuideList.tsx";
import ArtifactList from "../components/ArtifactList.tsx";

function DashboardPage() {
	const [email, setEmail] = useState('');

	useEffect(() => {
		const storedEmail = getEmail();
		if (storedEmail) {
			setEmail(storedEmail);
		}
	}, []);

	return (
		<div className="flex bg-[#F5F5F5] border-b border-gray-300 rounded-lg">
			<Sidebar/>
			<div className="flex-1">
				<div className="px-[30px] py-[48px] ">
					<Header userName={email}/>
					<ArtifactList/>
				</div>
				</div>
		</div>
	);
}

export default DashboardPage;
