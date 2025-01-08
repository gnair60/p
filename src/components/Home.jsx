import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import Footer from './Footer';

const Home = () => {
	const ref = useRef(0);
	const [text, setText] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			if (ref.current < name.length) {
				ref.current++;
				setText(() => text + name[ref.current - 1]);
			}
		}, 500);
		return () => clearInterval(interval);
	}, [text]);

	return (
		<div className='min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-blue-100 text-#003467' id='home'>
			{/* Animated Background */}
			<ul className="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>

			{/* Hero Section */}
			<div className='flex-grow flex justify-center items-center text-center'>
				<div className='p-6 backdrop-blur-md rounded-lg shadow-lg'>
					<h1 className='text-4xl sm:text-6xl font-extrabold mt-2 text-#003467'>
						Hi, I'm <span className='text-red-500' style={{color:'#670000'}}>{text}</span>
					</h1>
					<p className='mt-3 text-xl text-gray-700'>
						I love building scalable data pipelines and creating impactful data-driven insights.
					</p>
				</div>
			</div>

			{/* Footer Section */}
			<Footer />
		</div>
	);
};

export default Home;
