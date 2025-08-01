import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './App.jsx';
import AuthProvider from './AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AuthProvider>
			<Router>
				<ToastContainer autoClose={4000} theme="colored" position="bottom-right" />
				<App />
			</Router>
		</AuthProvider>
	</StrictMode>,
);
