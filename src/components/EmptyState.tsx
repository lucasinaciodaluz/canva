import React from 'react';

const EmptyState: React.FC = () => {
	return (
		<div className="text-center my-8">
			<div className="text-orange-500 text-4xl mb-4">⚠️</div>
			<p className="text-gray-700 text-lg">No code registered</p>
			<p className="text-gray-500">
				It looks like no issue code has been registered on the platform yet.
				Create a new code to easily track and manage technical issues.
			</p>
		</div>
	);
};

export default EmptyState;
