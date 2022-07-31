export default function Login() {
	return (
		<div className="flex w-full h-screen justify-center items-center">
			<div className="flex flex-col border-2 border-black rounded-md p-5 items-center justify-center shadow-md">
				<h1 className="font-bold font-sans text-2xl">Warung Bu Lina</h1>
				<h2 className="font-bold font-sans text-xl">Log-in</h2>
				<div className="flex flex-col mt-5">
					<label htmlFor="username">Username :</label>
					<input type="text" className="border-2 border-black rounded-md pl-3 placeholder:text-blue-400" placeholder="Masukkan Username"/>
					<label htmlFor="password" className="mt-5">Password :</label>
					<input type="password" className="border-2 border-black rounded-md pl-3 placeholder:text-blue-400" placeholder="Masukkan Password"/>
				</div>
				<a href="\admin" className="bg-sky-500 hover:bg-sky-400 hover:text-white rounded-lg px-3 py-1 mt-4">Log-in</a>
			</div>
		</div>
	)
}