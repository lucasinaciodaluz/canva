import React from 'react';

const EmptyState: React.FC = () => {
	return (
		<div className="text-center my-8">
			<div className="text-orange-500 text-4xl mb-4">⚠️</div>
			<p className="text-gray-700 text-lg">Nenhum código cadastrado</p>
			<p className="text-gray-500">
				Parece que nenhum código de problema foi cadastrado na plataforma ainda.
				Crie um novo código para acompanhar e gerenciar os problemas técnicos
				com facilidade.
			</p>
		</div>
	);
};

export default EmptyState;
