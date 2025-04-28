'use client';
import Image from 'next/image';
import { useState } from 'react';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	return (
		<div>
			<header className="flex flex-col items-center mt-4 mb-8">
				<h2 className="text-2xl font-bold text-gray-700 mb-4">User Login</h2>
				<Image src="/siac-logo.png" alt="SIAC Logo" width={180} height={38} />
			</header>
			<main className="flex justify-center">
				<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-4">
					<div className="mb-4">
						<label className="block xt-gray-700 font-bold mb-2" htmlFor="email">
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
                            onClick={}
						>
							Sign In
						</button>
					</div>
				</form>
			</main>
		</div>
	);
};
export default Login;
