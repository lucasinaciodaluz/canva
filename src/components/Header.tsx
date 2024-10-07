import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
	userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/create-guide');
	};
	return (
		<header className="flex justify-between items-center pb-[44px] border-b border-[#BBBBBB]">
			<h1 className="font-normal text-base leading-7 text-[#3E4253]">
				Welcome, <span className="font-bold">{userName}</span>
			</h1>
			<button
				onClick={handleClick}
				className="px-3 py-[10px] border-2 border-[#FF5C00] text-[#FF5C00] font-bold text-base leading-7 rounded-md hover:bg-[#FF5C00] hover:text-white transition-all"
			>
				Create new guide
			</button>
		</header>
	);
};

export default Header;
