import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import '../src/assets/css/style.css';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
				<Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
				<Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
