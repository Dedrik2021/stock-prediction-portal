import Button from './Button';

const buttons = [
	{ text: 'Login', className: 'btn-outline-info me-2', url: '/login' },
	{ text: 'Register', className: 'btn-info', url: '/register' },
];

export default function Header() {
	return (
		<nav className="container navbar pt-3 pb-3 align-items-start">
			<a href="/" className="navbar-brand text-light">
				Stock Prediction Portal
			</a>

			<div className="d-flex">
				{buttons.map((button, index) => (
					<Button
						key={index}
						text={button.text}
						className={button.className}
						url={button.url}
					/>
				))}
			</div>
		</nav>
	);
}
