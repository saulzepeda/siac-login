import Image from 'next/image';

const Login = () => {
	return (
		<div>
			<header className="flex flex-col items-center mt-4 mb-8">
				<h2 className="text-2xl font-bold text-gray-700 mb-4">User Login</h2>
				<Image src="/siac-logo.png" alt="SIAC Logo" width={180} height={38} />
			</header>
		</div>
	);
};
export default Login;
