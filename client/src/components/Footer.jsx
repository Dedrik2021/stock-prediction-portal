import React from 'react';

const Footer = () => {
	return (
		<>
			<footer className="footer py-3 my-4">
				<hr className="border-bottom" />
				<p className="text-light text-center">
					&copy; {new Date().getFullYear()} - Built with ❤️ by Oleg Grunskyy{' '}
				</p>
			</footer>
		</>
	);
};

export default Footer;
