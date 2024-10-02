import { createContext, useState, ReactNode, useEffect } from 'react';

interface CauseSolution {
	cause?: string;
	solution?: string;
	problem?: string;
	description?: string;
}

interface CauseSolutionContextType {
	causeSolution: CauseSolution | null; // Pode ser nulo inicialmente
	handleSetCauseSolution: (newCauseSolution: CauseSolution) => void;
}

export const CauseSolutionContext = createContext<
	CauseSolutionContextType | undefined
>(undefined);

export function CauseSolutionProvider({ children }: { children: ReactNode }) {
	const [causeSolution, setCauseSolution] = useState<CauseSolution | null>(
		null
	);

	useEffect(() => {}, []);

	// Atualiza o estado
	const handleSetCauseSolution = (newCauseSolution: CauseSolution) => {
		if (!causeSolution) {
			const defaultValue = {
				cause: '',
				solution: '',
				problem: '',
				description: '',
			};

			setCauseSolution({ ...defaultValue, ...newCauseSolution });
		}
	};

	console.log(causeSolution);

	return (
		<CauseSolutionContext.Provider
			value={{ causeSolution, handleSetCauseSolution }}
		>
			{children}
		</CauseSolutionContext.Provider>
	);
}
