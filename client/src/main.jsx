import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Router>
			<ToastContainer autoClose={4000} theme="colored" position="bottom-right" />
			<App />
		</Router>
	</StrictMode>,
);
