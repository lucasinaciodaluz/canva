import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
	userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/create-code');
	};
	return (
		<header className="flex justify-between items-center p-4 pl-0 bg-gray-100 border-b border-gray-300">
			<h1 className="text-xl2 text-left ml-0">
				Welcome, <span className="font-bold">{userName}</span>
			</h1>
			<button
				onClick={handleClick}
				className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
			>
				Create new guide
			</button>
		</header>
	);
};

export default Header;
