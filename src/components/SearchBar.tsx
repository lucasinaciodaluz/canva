import React, { useState } from 'react';
import { getArtifacts } from '../services/protectedService.ts';

const SearchBar: React.FC = () => {
	const [search, setSearch] = useState('');
	const [results, setResults] = useState<any[]>([]); // Pode ajustar a tipagem dos resultados conforme a necessidade

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			// Chama o serviço para obter os dados protegidos
			const data = await getArtifacts();
			setResults(data); // Atualiza os resultados da busca (ajustar conforme a estrutura de dados)
			console.log('Dados retornados:', data); // Para você verificar o que está retornando
		} catch (error) {
			console.error('Erro ao buscar dados:', error);
		}
	};

	return (
		<div className="my-4">
			<form onSubmit={handleSearch}>
				<label
					htmlFor="search"
					className="block text-gray-700 mb-2"
				>
					Qual a sua dúvida?
				</label>
				<input
					type="text"
					id="search"
					value={search}
					onChange={handleChange}
					placeholder="Pesquise por código ou palavra-chave"
					className="w-full p-2 border border-gray-300 rounded"
				/>
				<button
					type="submit"
					className="mt-2 bg-blue-500 text-white p-2 rounded"
				>
					Buscar
				</button>
			</form>

			{/* Renderização dos resultados da busca */}
			{results.length > 0 && (
				<div className="mt-4">
					<h3 className="text-gray-700 mb-2">Resultados da busca:</h3>
					<ul>
						{results.map((result, index) => (
							<li key={index}>
								{result}
							</li>
						))}

					</ul>
				</div>
			)}
		</div>
	);
};

export default SearchBar;
