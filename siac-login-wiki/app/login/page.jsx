'use client';
import Image from 'next/image';
import { useState } from 'react';
import { credentials } from '@/public/credentials';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isUserLogged, setIsUserLogged] = useState(false);

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const login = () => {
		if (credentials.email === email && credentials.password === password) {
			setIsUserLogged(true);
		}
	};

	return (
		<>
			<header className="flex items-center justify-center mt-8 mb-8 space-x-8">
				<Image src="/siac-logo.png" alt="SIAC Logo" width={180} height={38} />
				<h2 className="text-5xl font-bold">|</h2>
				<h2 className="text-3xl font-bold text-gray-700">User Login</h2>
			</header>
			<main className="flex justify-center">
				{!isUserLogged ? (
					<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-4">
						<div className="mb-4">
							<label
								className="block xt-gray-700 font-bold mb-2"
								htmlFor="email"
							>
								Email
							</label>
							<input
								id="email"
								type="email"
								className="border rounded py-2 px-3"
								value={email}
								onChange={handleEmailChange}
							></input>
						</div>
						<div className="mb-8">
							<label
								className="block xt-gray-700 font-bold mb-2"
								htmlFor="password"
							>
								Password
							</label>
							<input
								id="password"
								type="password"
								className="border rounded py-2 px-3"
								value={password}
								onChange={handlePasswordChange}
							></input>
						</div>
						<div className="flex items-center justify-between">
							<button
								className="rounded bg-blue-800 text-white font-bold py-2 px-4 w-full"
								type="button"
								onClick={login}
							>
								Sign In
							</button>
						</div>
					</form>
				) : (
					<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-4">
						<h2 className="block text-gray-700 text-2xl font-bold mb-2">
							Login Successful
						</h2>
						<h2 className="block text-gray-500 font-bold mb-2">
							Welcome back <span className="text-blue-700">{email}</span> !
						</h2>
					</div>
				)}
			</main>
		</>
	);
};
export default Login;
