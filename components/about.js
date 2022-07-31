export default function About() {
	return (
		<div>
			<div>
				<h1 className="font-serif font-extrabold text-3xl text-center my-10 underline underline-offset-8">ABOUT</h1>
				<div className="px-20 lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1 lg:gap-16 sm:gap-5 shadow-md pb-20">
					<div className="kiri flex flex-col gap-3 lg:order-1 sm:order-2">
						<h1 className="font-serif font-bold text-2xl sm:text-center lg:text-justify">Warung Bu Lina</h1>
						<div className="flex">
							<p className="font-sans text-lg">- Warung bu lina adalah usaha mikro kecil menengah atau yang biasa kita dengar yaitu UMKM yang bergerak di bidang <span className="ml-1 font-sans text-blue-500">KULINER</span></p>
						</div>
						<div className="flex">
							<p className="font-sans text-lg">- Warung bu lina telah berdiri sejak <span className="ml-1 font-mono text-blue-500">tanggal 04 juni 2018</span></p>
						</div>
						<div className="flex">
							<p className="font-sans text-lg">- Warung bu lina bertempat atau berlokasi di <span className="ml-1 font-mono text-blue-500">Dusun Krajan, Pakistaji, Kec. Kabat, Kabupaten Banyuwangi, Jawa Timur 68461</span> atau bisa klik link berikut {'=>'} <a href="https://g.page/Geprek-pakistaji?share" target="_blank" className="text-red-500 hover:text-blue-500">klik disini</a></p>
						</div>
					</div>
					<div className="kanan lg:order-2 sm:order-1">
					<img src="contoh.jpg" alt="contoh" className="rounded-lg" />
					</div>
				</div>
			</div>
		</div>
	)
}

// {/* <div>
// 				<h1 className="font-serif font-extrabold text-3xl text-center my-10 underline underline-offset-8">ABOUT</h1>
// 				<div className="px-20 flex justify-between items-center shadow-md pb-20">
// 					{/* kiri */}
// 					<div className="kiri flex flex-col gap-3">
// 						<h1 className="font-serif font-bold text-2xl">Warung Bu Lina</h1>
// 						<div className="flex">
// 							<p className="font-sans text-lg">- Warung bu lina adalah usaha mikro kecil menengah atau yang biasa kita dengar yaitu UMKM</p>
// 						</div>
// 						<div className="flex">
// 							<p className="font-sans text-lg">- Warung bu lina telah berdiri sejak <span className="ml-1 font-mono text-blue-500">tanggal 04 juni 2018</span></p>
// 						</div>
// 						<div className="flex">
// 							<p className="font-sans text-lg">- Warung bu lina bertempat atau berlokasi di <span className="ml-1 font-mono text-blue-500">Dusun Krajan, Pakistaji, Kec. Kabat, Kabupaten Banyuwangi, Jawa Timur 68461</span> atau bisa klik link berikut {'=>'} <a href="https://g.page/Geprek-pakistaji?share" target="_blank" className="text-red-500 hover:text-blue-500">klik disini</a></p>
// 						</div>
// 					</div>
// 					{/* kanan */}
// 					<div className="kanan">
// 					<img src="contoh.jpg" alt="contoh" className="rounded-lg" />
// 					</div>
// 				</div>
// 			</div> */}