import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const proxy = import.meta.env.VITE_REACT_APP_PROXY;

const Register = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

	const handleRegistration = async (e) => {
		e.preventDefault();
		setLoading(true);

		const userData = {
			username,
			email,
			password,
		};

		try {
			await axios.post(`${proxy}/api/v2/register/`, userData);
			setErrors({});
            toast.success('Registration successful');
            navigate('/login');
		} catch (error) {
			setErrors(error.response.data);
			console.error('Registration error: ', error.response.statusText);
            toast.error(error.response.data);
            console.log('Registration error: ', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-6 bg-light-dark p-4 rounded">
						<h3 className="text-light text-center mb-4">Create an Account</h3>
						<form onSubmit={handleRegistration}>
							<div className="mb-3">
								<input
									type="text"
									className="form-control"
									placeholder="Username"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
								<small>
									{errors.username && (
										<div className="text-danger">{errors.username}</div>
									)}
								</small>
							</div>
							<div className="mb-3">
								<input
									type="email"
									className="form-control"
									placeholder="Email address"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
                                <small>
									{errors.email && (
										<div className="text-danger">{errors.email}</div>
									)}
								</small>
							</div>

							<div className="mb-3">
								<input
									type="password"
									className="form-control "
									placeholder="Set password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
								<small>
									{errors.password && (
										<div className="text-danger">{errors.password}</div>
									)}
								</small>
							</div>
							{loading ? (
								<button
									type="submit"
									className="btn btn-info d-block mx-auto"
									disabled
								>
									<FontAwesomeIcon icon={faSpinner} spin /> Please wait...
								</button>
							) : (
								<button type="submit" className="btn btn-info d-block mx-auto">
									Register
								</button>
							)}
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
