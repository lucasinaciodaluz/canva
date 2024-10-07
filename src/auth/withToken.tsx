import React, { PropsWithChildren } from 'react';

import api from '../client';
import { getToken, redirectToLogin } from '../services/authService';

const withToken = (Component: React.JSXElementConstructor<PropsWithChildren>): React.FC<PropsWithChildren> => {
	const Providers: React.FC<PropsWithChildren> = (props) => {
		const token = getToken();

		if (token) {
			api.init(token);
			return <Component {...props} />;
		} else {
			redirectToLogin();
			return null;
		}
	};

	return Providers;
};

export default withToken;
