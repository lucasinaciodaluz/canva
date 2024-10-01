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
		<header className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300">
			<p className="text-sm">Seja bem-vindo, {userName}</p>
			<button
				onClick={handleClick}
				className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
			>
				Criar código
			</button>
		</header>
	);
};

export default Header;
