'use client';
import Image from 'next/image';

import { useState, useEffect } from 'react';
const Wiki = () => {
	const [character, setCharacter] = useState();
	const [randomInt, setRandomInt] = useState(1);

	const getRandomCharacter = () => {
		const rand = Math.floor(Math.random() * 826);
		setRandomInt(rand);
	};

	useEffect(() => {
		let getData = async () => {
			try {
				const response = await fetch(
					'https://rickandmortyapi.com/api/character/' + randomInt
				);
				if (!response.ok) {
					console;
				}
				const data = await response.json();
				setCharacter(data);
			} catch (error) {
				console.error('Failed to retry api', error);
			}
		};

		getData();
	}, [randomInt]);

	return (
		<>
			<header className="flex flex-col items-center mb-8 mt-4">
				<Image
					src="/ram-logo.png"
					alt="Rick and Morty Logo"
					width={400}
					height={122}
				/>
				<h1 className="text-2xl font-bold text-gray-700 mt-4">Wiki</h1>
			</header>
			<main className="flex justify-center ">
				<div className="flex flex-col shadow-md rounded bg-white items-center align-center px-8 pt-6 pb-8 mb-4">
					<button
						className="rounded bg-green-700 text-white font-bold hover:bg-green-900 py-2 px-4 mb-4"
						onClick={getRandomCharacter}
					>
						Get Random Character
					</button>
					<div className="flex items-center">
						<img
							src={character?.image}
							className="w-64 h-64 object-cover rounded-full mr-6"
						></img>
						<div className="grid grid-cols-2 gap-y-6 items-center">
							<h2 className="text-green-600 font-bold text-right pr-6">
								Name:
							</h2>
							<span className="bg-green-600 text-white text-center px-2 py-2 rounded">
								{character?.name}
							</span>
							<h2 className="text-green-600 font-bold text-right pr-6">
								Species:
							</h2>
							<span className="bg-green-600 text-white text-center px-2 py-2 rounded">
								{character?.species}
							</span>
							<h2 className="text-green-600 font-bold text-right pr-6">
								Gender:
							</h2>
							<span className="bg-green-600 text-white text-center px-2 py-2 rounded">
								{character?.gender}
							</span>
							<h2 className="text-green-600 font-bold text-right pr-6">
								Status:
							</h2>
							<span className="bg-green-600 text-white text-center px-2 py-2 rounded">
								{character?.status}
							</span>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};
export default Wiki;
