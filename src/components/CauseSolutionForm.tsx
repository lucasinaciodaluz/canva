import { useState } from 'react';

const CauseSolutionForm = () => {
	const [cause, setCause] = useState('');
	const [solution, setSolution] = useState('');
	const [financialCost, setFinancialCost] = useState('');
	const [timeCost, setTimeCost] = useState('');
	const [probability, setProbability] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Aqui vai o código de submissão do formulário
		console.log({ cause, solution, financialCost, timeCost, probability });
		// navigate('/create-code'); // Redireciona para a página de criação de código
	};

	const handleFinancialCostChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = event.target.value.replace(/[^0-9]/g, '');
		const formattedValue =
			value.length > 2
				? 'R$ ' + value.slice(0, -2) + ',' + value.slice(-2)
				: value;
		setFinancialCost(formattedValue);
	};

	const handleTimeCostChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.replace(/[^0-9]/g, '');

		const minutes = Math.min(parseInt(value.slice(0, -2) || '0', 10), 60); // Limita a 60 minutos
		const seconds = Math.min(parseInt(value.slice(-2) || '0', 10), 59); // Limita a 59 segundos

		const formattedValue = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
		setTimeCost(formattedValue);
	};

	const handleProbabilityChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = event.target.value.replace(/[^0-9]/g, ''); // remove tudo que não for número

		if (value.length > 3) {
			return; // Garantindo que o valor tenha no mínimo 3 caracteres
		}

		setProbability(String(value));
	};

	const handleCancel = () => {
		setCause('');
		setSolution('');
		setFinancialCost('');
		setTimeCost('');
		setProbability('');
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
			<div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
				<h2 className="text-lg font-medium mb-4">Estou sem internet</h2>
				<p className="text-sm mb-2">
					Digite aqui uma possível causa para o problema criado.
				</p>

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							className="block text-sm font-medium mb-1"
							htmlFor="cause"
						>
							Causa<span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							id="cause"
							className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
							placeholder="Ex. Verifique o seu roteador"
							value={cause}
							onChange={(e) => setCause(e.target.value)}
							required
						/>
					</div>

					<div className="mb-4">
						<label
							className="block text-sm font-medium mb-1"
							htmlFor="solution"
						>
							Solução<span className="text-red-500">*</span>
						</label>
						<textarea
							id="solution"
							className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
							placeholder="Descreva uma breve solução para a causa."
							value={solution}
							onChange={(e) => setSolution(e.target.value)}
							maxLength={100}
							required
						></textarea>
						<div className="text-right text-sm text-gray-500">
							{solution.length}/100
						</div>
					</div>

					<h3 className="text-sm font-medium mb-2">Estimativa de custo</h3>
					<div className="grid grid-cols-3 gap-2 mb-4">
						<div>
							<label
								className="block text-xs font-medium mb-1"
								htmlFor="financialCost"
							>
								Financeiro
							</label>
							<input
								type="text"
								id="financialCost"
								className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
								placeholder="R$ 00,00"
								value={financialCost}
								onChange={(event) => handleFinancialCostChange(event)}
							/>
						</div>

						<div>
							<label
								className="block text-xs font-medium mb-1"
								htmlFor="timeCost"
							>
								Tempo
							</label>
							<input
								type="text"
								id="timeCost"
								className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
								placeholder="00:00"
								value={timeCost}
								onChange={(event) => handleTimeCostChange(event)}
							/>
						</div>

						<div>
							<label
								className="block text-xs font-medium mb-1"
								htmlFor="probability"
							>
								Probabilidade
							</label>
							<input
								type="text"
								id="probability"
								className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
								placeholder="%"
								value={probability}
								onChange={(event) => handleProbabilityChange(event)}
							/>
						</div>
					</div>

					<div className="flex justify-end gap-2">
						<button
							type="button"
							className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
							onClick={handleCancel}
						>
							Cancelar
						</button>
						<button
							type="submit"
							className="bg-orange-500 text-white px-4 py-2 rounded-md"
							onChange={(event) => handleSubmit(event)}
						>
							Adicionar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CauseSolutionForm;
