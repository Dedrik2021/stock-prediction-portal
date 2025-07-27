import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Register from './components/Register';
import Login from './components/Login';

import '../src/assets/css/style.css';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/dashboard" element={<h2>Dashboard Page</h2>} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
