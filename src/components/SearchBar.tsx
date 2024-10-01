import React from 'react';
import { useState } from 'react';

const SearchBar: React.FC = () => {
	const [search, setSearch] = useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	return (
		<div className="my-4">
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
		</div>
	);
};

export default SearchBar;
