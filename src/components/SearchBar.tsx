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
		<div className="my-[34px]">
			<span className="font-bold text-2xl leading-7 text-[#5050C4] block mb-6">
				Guides List
			</span>

			<form onSubmit={handleSearch}>
				<label
					htmlFor="search"
					className="block font-bold text-black tex-base leading-7 mb-4"
				>
					What&#x27;s your question?
				</label>
				<input
					type="text"
					id="search"
					value={search}
					onChange={handleChange}
					placeholder="Search by code or keyword"
					className="w-full px-3 py-[10px] border rounded border-[#767676] focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] mb-6"
				/>
			</form>

			{/* Renderização dos resultados da busca */}
			{results.length > 0 && (
				<div className="mt-4">
					<h3 className="text-gray-700 mb-2">Resultados da busca:</h3>
					<ul>
						{results.map((result, index) => (
							<li key={index}>{result}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default SearchBar;
