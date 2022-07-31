import { useEffect, useState } from "react";

export default function Navbar() {
	// useEffect(() => {
	// 	const checkbox = document.querySelector('.checkbox');
	// 	checkbox.addEventListener('change', () => {
	// 			document.body.classList.toggle('dark');
	// 	});
	// }, [])

	const [isOpen, setIsOpen] = useState(false)

	return(
		<div className="w-full">
			<div className="w-full font-mono py-4 shadow-md lg:flex lg:flex-row justify-between items-center bg-white sm:flex-col sm:items-start sm:px-10 border-b-2 border-white transition duration-200">
				<a className="text-3xl font-bold hover:text-black transition duration-300 dark:hover:text-white" href="/">Geprek Pakistaji</a>
				<div>
					<nav className={`${isOpen ? 'block' : 'hidden'} flex lg:flex-row sm:flex-col items-center sm:space-y-4 lg:block lg:space-y-0 sm:mt-6 lg:mt-0`}>
					{/* <nav className="flex lg:flex-row sm:flex-col items-center sm:space-y-4 lg:space-y-0 sm:mt-6 lg:mt-0"> */}
						{/* <a className="mx-4 text-2xl transition duration-300 transform hover:text-red-500 dark:hover:text-white" href="">Home</a> */}
						<a className="mx-4 text-2xl transition duration-300 transform hover:text-red-500 dark:hover:text-white" href="">About</a>
						<a className="mx-4 text-2xl transition duration-300 transform hover:text-red-500 dark:hover:text-white" href="">Order</a>
						<a className="mx-4 text-2xl transition duration-300 transform hover:text-red-500 dark:hover:text-white" href="login">Login</a>

						{/* <input type="checkbox" id="checkbox" className="checkbox absolute opacity-0" />
						<label htmlFor="checkbox" className="label lg:flex sm:hidden items-center justify-end relative cursor-pointer w-9 bg-black h-4 px-1 rounded-lg dark:bg-white">
							<div className="ball w-3 h-3 rounded-full bg-white absolute transition transform ease-linear duration-200 dark:bg-gray-700"></div>
						</label> */}
					</nav>
					<div className="flex space-x-7 sm:absolute sm:top-6 sm:right-8">
						<button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none text-black dark:text-white sm:block lg:hidden">
							<img src="menu.png" alt="menu" className="w-5 h-5" />
						</button>
						{/* <label htmlFor="checkbox" className="label flex items-center justify-center relative cursor-pointer sm:flex lg:hidden">
							<div className="ball w-5 h-5 rounded-full bg-black absolute dark:bg-white"></div>
						</label> */}
					</div>
				</div>
			</div>
		</div>
	)
}