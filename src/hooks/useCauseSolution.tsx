import { useContext } from 'react';
import { CauseSolutionContext } from '../context/CauseSolutionContext';

const useCauseSolution = () => {
	const context = useContext(CauseSolutionContext);
	if (!context) {
		throw new Error(
			'useCauseSolution must be used within a CauseSolutionProvider'
		);
	}
	return context;
};

export { useCauseSolution };
