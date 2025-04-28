import Image from 'next/image';
const Wiki = () => {
	return (
		<>
			<header className="flex flex-col items-center mb-8 mt-4">
				<Image
					src="/ram-logo.png"
					alt="Rick and Morty Logo"
					width={400}
					height={122}
				/>
				<h1 className="text-2xl font-bold text-gray-700">Wiki</h1>
			</header>
			<main className="flex justify-center ">
				<div className="flex flex-col shadow-md rounded bg-white items-center align-center px-8 pt-6 pb-8 mb-4">
					<button className="rounded bg-green-700 text-white font-bold hover:bg-green-900 py-2 px-4 mb-4">
						Get Random Character
					</button>
					<div>
						<img></img>
						<div className="flex flex-col space-y-6">
							<h2 className="text-green-500">Name:</h2>
							<h2 className="text-green-500">Species:</h2>
							<h2 className="text-green-500">Gender:</h2>
							<h2 className="text-green-500">Status:</h2>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};
export default Wiki;
