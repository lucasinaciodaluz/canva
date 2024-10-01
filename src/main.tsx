import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CauseSolutionProvider } from './context/CauseSolutionContext';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<CauseSolutionProvider>
			<App />
		</CauseSolutionProvider>
	</StrictMode>
);
