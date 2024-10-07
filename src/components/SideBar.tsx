import React from 'react';
import LogoIcon from '../assets/LogoIcon.svg';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
	const navigate = useNavigate();
	return (
		<aside className="w-[205px] h-screen bg-[#3E4253] text-white sticky top-0"> {/* sticky + top-0 */}
			<div className="flex gap-2 mb-[5px] px-6 py-12">
				<img
					src={LogoIcon}
					alt="LogoIcon"
				/>
				<h1 className="text-xl font-bold leading-7">CanvasOps</h1>
			</div>

			<div className="px-[18px]">
				<nav>
					<ul className="flex flex-col gap-7">
						<li className="w-[181px] font-normal text-base leading-7 hover:font-bold hover:border hover:border-none hover:px-3 py-1 hover:rounded-md hover:bg-[#545871] transition-all">
							<a onClick={() => navigate('/')}>Guides List</a>
						</li>
						<li className="w-[181px] font-normal text-base leading-7 hover:font-bold hover:border hover:border-none hover:px-3 py-1 hover:rounded-md hover:bg-[#545871] transition-all ">
							<a onClick={() => navigate('/login')}>Exit</a>
						</li>
					</ul>
				</nav>
			</div>
		</aside>
	);
};

export default Sidebar;
