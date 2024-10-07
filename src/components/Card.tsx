import { useNavigate } from 'react-router-dom';
import { useCauseSolution } from '../hooks/useCauseSolution';

interface CardProps {
	problem: string;
	description: string;
}

const Card: React.FC<CardProps> = () => {
	const navigate = useNavigate();

	const { causeSolution } = useCauseSolution();
	const handleClick = () => {
		navigate('/create-code');
	};

	return (
		<div className="bg-white p-6 rounded-lg shadow-lg">
			<h2 className="text-lg font-medium mb-4">{causeSolution?.problem}</h2>
			<p className="text-sm">{causeSolution?.description}</p>
			<hr className="my-4" />
			<div className="text-center">
				<button
					onClick={handleClick}
					className=" text-orange-500 px-4 py-2 rounded border border-orange-500">
					+ Add cause
				</button>
			</div>
		</div>
	);
};

export default Card;
