import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCauseSolution } from '../hooks/useCauseSolution';

const CreateCodeForm = () => {
	const [problem, setProblem] = useState('');
	const [description, setDescription] = useState('');
	const { handleSetCauseSolution } = useCauseSolution();

	const navigate = useNavigate();

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		const newCauseSolution = { problem, description };
		handleSetCauseSolution(newCauseSolution);

		navigate('/card');
	};

	const handleClickAbort = () => {
		navigate('/');
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
			<div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
				<h2 className="text-lg font-medium mb-4">Criar código</h2>
				<p className="text-sm mb-2">
					Dê um nome e inclua uma breve descrição para o problema.
				</p>

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							className="block text-sm font-medium mb-1"
							htmlFor="problem"
						>
							Digite o problema enfrentado
							<span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							id="problem"
							className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
							placeholder="Ex. Estou sem internet"
							value={problem}
							onChange={(event) => setProblem(event.target.value)}
							required
						/>
					</div>

					<div className="mb-4">
						<label
							className="block text-sm font-medium mb-1"
							htmlFor="description"
						>
							Digite uma breve descrição do problema
						</label>
						<textarea
							id="description"
							className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
							placeholder="Campo opcional caso queira fornecer mais contexto para os técnicos em campo."
							value={description}
							onChange={(event) => setDescription(event.target.value)}
							maxLength={100}
						></textarea>
						<div className="text-right text-sm text-gray-500">
							{description.length}/100
						</div>
					</div>

					<div className="flex justify-end gap-2">
						<button
							type="button"
							onClick={handleClickAbort}
							className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
						>
							Cancelar
						</button>
						<button
							type="submit"
							className="bg-orange-500 text-white px-4 py-2 rounded-md"
						>
							Criar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateCodeForm;
