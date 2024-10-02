import React from 'react';

const Sidebar: React.FC = () => {
	return (
		<aside className="w-64 bg-gray-800 text-white h-screen p-4">
			<nav>
				<ul className="space-y-4">
					<li>
						<a
							href="#"
							className="hover:text-orange-400"
						>
							Canva Ops
						</a>
					</li>
					<li>
						<a
							href="#"
							className="hover:text-orange-400"
						>
							Guides List
						</a>
					</li>
					<li>
						<a
							href="#"
							className="hover:text-orange-400"
						>
							Exit
						</a>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;
