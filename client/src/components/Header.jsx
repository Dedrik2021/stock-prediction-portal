import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import Button from './Button';
import { AuthContext } from '../AuthProvider';

const authButtons = [
	{ text: 'Login', className: 'btn-outline-info me-2', url: '/login' },
	{ text: 'Register', className: 'btn-info', url: '/register' },
];

export default function Header() {
	const navigate = useNavigate();
	const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

	const handleLogout = () => {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
		setIsLoggedIn(false);
		navigate('/login');
		console.log('Logout successful');
	};

	return (
		<>
			<nav className="container navbar pt-3 pb-3 align-items-start">
				<Link to="/" className="navbar-brand text-light">
					Stock Prediction Portal
				</Link>

				<div className="d-flex">
					{isLoggedIn ? (
						<>
							<Button text="Dashboard" className="btn btn-outline-info" url="/dashboard" />
							&nbsp;
							<button type="button" className="btn btn-danger" onClick={handleLogout}>
								Logout
							</button>
						</>
					) : (
						authButtons.map((button, index) => (
							<Button
								key={index}
								text={button.text}
								className={button.className}
								url={button.url}
							/>
						))
					)}
				</div>
			</nav>
		</>
	);
}
