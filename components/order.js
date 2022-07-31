import { useEffect, useState } from "react";

export default function Order() {
  const [merahNasi, setMerahNasi] = useState(0);
  const [merah, setMerah] = useState(0);

  const [hijauNasi, setHijauNasi] = useState(0);
  const [hijau, setHijau] = useState(0);

  const [seraiNasi, setSeraiNasi] = useState(0);
  const [serai, setSerai] = useState(0);

  const [campurNasi, setCampurNasi] = useState(0);
  const [campur, setCampur] = useState(0);

  const [tahu, setTahu] = useState(0);
  const [oteote, setOteote] = useState(0);

  const [totalHarga, setTotalHarga] = useState(0);

  // tombol merah start
  const btnMerahnasiminus = () => {
    setMerahNasi(merahNasi - 1);
    setTotalHarga(totalHarga - 14000);
  };
  const btnMerahnasiplus = () => {
    setMerahNasi(merahNasi + 1);
    setTotalHarga(totalHarga + 14000);
  };
  const btnMerahminus = () => {
    setMerah(merah - 1);
    setTotalHarga(totalHarga - 12000);
  };
  const btnMerahplus = () => {
    setMerah(merah + 1);
    setTotalHarga(totalHarga + 12000);
  };
  // tombol merah end

  // tombol hijau start
  const btnHijaunasiminus = () => {
    setHijauNasi(hijauNasi - 1);
    setTotalHarga(totalHarga - 14000);
  };
  const btnHijaunasiplus = () => {
    setHijauNasi(hijauNasi + 1);
    setTotalHarga(totalHarga + 14000);
  };
  const btnHijauminus = () => {
    setHijau(hijau - 1);
    setTotalHarga(totalHarga - 12000);
  };
  const btnHijauplus = () => {
    setHijau(hijau + 1);
    setTotalHarga(totalHarga + 12000);
  };
  // tombol hijau end

  // tombol serai start
  const btnSerainasiminus = () => {
    setSeraiNasi(seraiNasi - 1);
    setTotalHarga(totalHarga - 14000);
  };
  const btnSerainasiplus = () => {
    setSeraiNasi(seraiNasi + 1);
    setTotalHarga(totalHarga + 14000);
  };
  const btnSeraiminus = () => {
    setSerai(serai - 1);
    setTotalHarga(totalHarga - 12000);
  };
  const btnSeraiplus = () => {
    setSerai(serai + 1);
    setTotalHarga(totalHarga + 12000);
  };
  // tombol hijau end

  // tombol campur start
  const btnCampurnasiminus = () => {
    setCampurNasi(campurNasi - 1);
    setTotalHarga(totalHarga - 14000);
  };
  const btnCampurnasiplus = () => {
    setCampurNasi(campurNasi + 1);
    setTotalHarga(totalHarga + 14000);
  };
  const btnCampurminus = () => {
    setCampur(campur - 1);
    setTotalHarga(totalHarga - 12000);
  };
  const btnCampurplus = () => {
    setCampur(campur + 1);
    setTotalHarga(totalHarga + 12000);
  };
  // tombol hijau end

	// tahu
	const btnTahuminus = () => {
		setTahu(tahu - 1);
		setTotalHarga(totalHarga - 700);
	}
	const btnTahuplus = () => {
		setTahu(tahu + 1);
		setTotalHarga(totalHarga + 700);
	}
	// tahu end

	// tahu
	const btnOteoteminus = () => {
		setOteote(oteote - 1);
		setTotalHarga(totalHarga - 700);
	}
	const btnOteoteplus = () => {
		setOteote(oteote + 1);
		setTotalHarga(totalHarga + 700);
	}
	// tahu end

  return (
    <div>
      <h1 className="font-serif font-extrabold text-3xl text-center my-10 underline underline-offset-8">
        ORDER
      </h1>
      <div className="lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1 gap-14 content-evenly items-stretch px-14">
        {/* merah */}
        <div className="lg:flex lg:flex-row sm:flex sm:flex-col p-5 lg:gap-x-14 sm:gap-y-5 border-3 border-black rounded-2xl justify-center items-center shadow-lg place-self-center">
          <img
            src="merah.webp"
            alt="merah"
            className="rounded-2xl shadow-md bg-cover aspect-[4/3] w-1/2"
          />
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <p className="font-sans">Ayam Geprek Sambal</p>
              <p className="font-mono font-semibold text-indigo-700">Merah</p>
            </div>
            {/* nasi */}
            <p className="font-sans font-bold">Pakai Nasi</p>
            <p className="font-mono">Rp. 14.000</p>
            <div className="flex w-full justify-between items-center">
              <button
                className="flex justify-center items-center bg-blue-500 font-extrabold w-7 h-7 rounded-md shadow-md transition duration-300"
                onClick={btnMerahnasiminus}
              >
                -
              </button>
              <div className="flex justify-center items-center font-mono border-2 border-black px-2 rounded-md shadow-md">
                {merahNasi} pcs
              </div>
              <button
                className="flex justify-center items-center bg-blue-500 font-extrabold w-7 h-7 rounded-md shadow-md transition duration-300"
                onClick={btnMerahnasiplus}
              >
                +
              </button>
            </div>
            {/* tanpa nasi */}
            <p className="font-sans font-bold">Tanpa Nasi</p>
            <p className="font-mono">Rp. 12.000</p>
            <div className="flex w-full justify-between items-center">
              <button
                className="flex justify-center items-center bg-blue-500 font-extrabold w-7 h-7 rounded-md shadow-md transition duration-300"
                onClick={btnMerahminus}
              >
                -
              </button>
              <div className="flex justify-center items-center font-mono border-2 border-black px-2 rounded-md shadow-md">
                {merah} pcs
              </div>
              <button
                className="flex justify-center items-center bg-blue-500 font-extrabold w-7 h-7 rounded-md shadow-md transition duration-300"
                onClick={btnMerahplus}
              >
                +
              </button>
            </div>
          </div>
        </div>
				{/* merah end */}
        {/* hijau */}
        <div className="lg:flex lg:flex-row sm:flex sm:flex-col p-5 lg:gap-x-14 sm:gap-y-5 border-3 border-black rounded-2xl justify-center items-center shadow-lg place-self-center">
          <img
            src="hijau.jpg"
            alt="hijau"
            className="rounded-2xl shadow-md bg-cover aspect-[4/3] w-1/2"
          />
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <p className="font-sans">Ayam Geprek Sambal</p>
              <p className="font-mono font-semibold text-indigo-700">Hijau</p>
            </div>
            {/* nasi */}
            <p className="font-sans font-bold">Pakai Nasi</p>
            <p className="font-mono">Rp. 14.000</p>
            <div className="flex w-full justify-between items-center">
              <button
                className="flex justify-center items-center bg-blue-500 font-extrabold w-7 h-7 rounded-md shadow-md transition duration-300"
                onClick={btnHijaunasiminus}
              >
                -
              </button>
              <div className="flex justify-center items-center font-mono border-2 border-black px-2 rounded-md shadow-md">
                {hijauNasi} pcs
              </div>
              <button
                className="flex justify-center items-center bg-blue-500 font-extrabold w-7 h-7 rounded-md shadow-md transition duration-300"
                onClick={btnHijaunasiplus}
              >
                +
              </button>
            </div>
            {/* tanpa nasi */}
            <p className="font-sans font-bold">Tanpa Nasi</p>
            <p className="font-mono">Rp. 12.000</p>
            <div className="flex w-full justify-between items-center">
              <button
                className="flex justify-center items-center bg-blue-500 font-extrabold w-7 h-7 rounded-md shadow-md transition duration-300"
                onClick={btnHijauminus}
              >
                -
              </button>
              <div className="flex justify-center items-center font-mono border-2 border-black px-2 rounded-md shadow-md">
                {hijau} pcs
              </div>
              <button
                className="flex justify-center items-center bg-blue-500 font-extrabold w-7 h-7 rounded-md shadow-md transition duration-300"
                onClick={btnHijauplus}
              >
                +
              </button>
            </div>
          </div>
        </div>
				{/* hijau end */}
        {/* serai */}
        <div className="lg:flex lg:flex-row sm:flex sm:flex-col p-5 lg:gap-x-14 sm:gap-y-5 border-3 border-black rounded-2xl justify-center items-center shadow-lg place-self-center">
          <img
            src="serai.jpg"
            alt="serai"
            className="rounded-2xl shadow-md bg-cover aspect-[4/3] w-1/2"
          />
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <p className="font-sans">Ayam Geprek Sambal</p>
              <p className="font-mono font-semibold text-indigo-700">Serai</p>
            </div>
            {/* nasi */}
            <p className="font-sans font-bold">Pakai Nasi</p>
            <p className="font-mono">Rp. 14.000</p>
            <div className="flex w-full justify-between items-center">
              <button
                className="flex justify-center items-center bg-blue-500 font-extrabold w-7 h-7 rounded-md shadow-md transition duration-300"
                onClick={btnSerainasiminus}
              >
                -
              </button>
              <div className="flex justify-center items-center font-mono border-2 border-black px-2 rounded-md shadow-md">
                {seraiNasi} pcs
              </div>
              <button
                className="flex justify-center items-center bg-blue-500 font-extrabold w-7 h-7 rounded-md shadow-md transition duration-300"
                onClick={btnSerainasiplus}
              >
                +
              </button>
            </div>
            {/* tanpa nasi */}
            <p className="font-sans font-bold">Tanpa Nasi</p>
            <p className="font-mono">Rp. 12.000</p>
            <div className="flex w-full justify-between items-center">
              <button
                className="flex justify-center items-center bg-blue-500 font-extrabold w-7 h-7 rounded-md shadow-md transition duration-300"
                onClick={btnSeraiminus}
              >
                -
              </button>
              <div className="flex justify-center items-center font-mono border-2 border-black px-2 rounded-md shadow-md">
                {serai} pcs
              </div>
              <button
                className="flex justify-center items-center bg-blue-500 font-extrabold w-7 h-7 rounded-md shadow-md transition duration-300"
                onClick={btnSeraiplus}
              >
                +
              </button>
            </div>
          </div>
        </div>
				{/* serai end */}
        {/* campur */}
        <div className="lg:flex lg:flex-row sm:flex sm:flex-col p-5 lg:gap-x-14 sm:gap-y-5 border-3 border-black rounded-2xl justify-center items-center shadow-lg place-self-center">
          <img
            src="merah.webp"
            alt="merah"
            className="rounded-2xl shadow-md bg-cover aspect-[4/3] w-1/2"
          />
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <p className="font-sans">Ayam Geprek Sambal</p>
              <p className="font-mono font-semibold text-indigo-700">Campur</p>
            </div>
            {/* nasi */}
            <p className="font-sans font-bold">Pakai Nasi</p>
            <p className="font-mono">Rp. 14.000</p>
            <div className="flex w-full justify-between items-center">
              <button
                className="flex justify-center items-center bg-blue-500 font-extrabold w-7 h-7 rounded-md shadow-md transition duration-300"
                onClick={btnCampurnasiminus}
              >
                -
              </button>
              <div className="flex justify-center items-center font-mono border-2 border-black px-2 rounded-md shadow-md">
                {campurNasi} pcs
              </div>
              <button
                className="flex justify-center items-center bg-blue-500 font-extrabold w-7 h-7 rounded-md shadow-md transition duration-300"
                onClick={btnCampurnasiplus}
              >
                +
              </button>
            </div>
            {/* tanpa nasi */}
            <p className="font-sans font-bold">Tanpa Nasi</p>
            <p className="font-mono">Rp. 12.000</p>
            <div className="flex w-full justify-between items-center">
              <button
                className="flex justify-center items-center bg-blue-500 font-extrabold w-7 h-7 rounded-md shadow-md transition duration-300"
                onClick={btnCampurminus}
              >
                -
              </button>
              <div className="flex justify-center items-center font-mono border-2 border-black px-2 rounded-md shadow-md">
                {campur} pcs
              </div>
              <button
                className="flex justify-center items-center bg-blue-500 font-extrabold w-7 h-7 rounded-md shadow-md transition duration-300"
                onClick={btnCampurplus}
              >
                +
              </button>
            </div>
          </div>
        </div>
				{/* campur end */}
        {/* tahu */}
        <div className="lg:flex lg:flex-row sm:flex sm:flex-col p-5 lg:gap-x-14 sm:gap-y-5 border-3 border-black rounded-2xl justify-center items-center shadow-lg place-self-center">
          <img
            src="tahu.jpg"
            alt="tahu"
            className="rounded-2xl shadow-md bg-cover aspect-[4/3] w-1/2"
          />
          <div className="w-44 gap-y-2 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <p className="font-sans font-bold">Tahu Petis</p>
            </div>
            {/* nasi */}
            <p className="font-mono">Rp. 700</p>
            <div className="flex w-full justify-between items-center">
              <button
                className="flex justify-center items-center bg-blue-500 font-extrabold w-7 h-7 rounded-md shadow-md transition duration-300"
                onClick={btnTahuminus}
              >
                -
              </button>
              <div className="flex justify-center items-center font-mono border-2 border-black px-2 rounded-md shadow-md">
                {tahu} pcs
              </div>
              <button
                className="flex justify-center items-center bg-blue-500 font-extrabold w-7 h-7 rounded-md shadow-md transition duration-300"
                onClick={btnTahuplus}
              >
                +
              </button>
            </div>
          </div>
        </div>
				{/* tahu end */}
        {/* ote ote */}
        <div className="lg:flex lg:flex-row sm:flex sm:flex-col p-5 lg:gap-x-14 sm:gap-y-5 border-3 border-black rounded-2xl justify-center items-center shadow-lg place-self-center">
          <img
            src="ote-ote.jpg"
            alt="ote ote"
            className="rounded-2xl shadow-md bg-cover aspect-[4/3] w-1/2"
          />
          <div className="w-44 gap-y-2 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <p className="font-sans font-bold">Ote - Ote</p>
            </div>
            {/* nasi */}
            <p className="font-mono">Rp. 700</p>
            <div className="flex w-full justify-between items-center">
              <button
                className="flex justify-center items-center bg-blue-500 font-extrabold w-7 h-7 rounded-md shadow-md transition duration-300"
                onClick={btnOteoteminus}
              >
                -
              </button>
              <div className="flex justify-center items-center font-mono border-2 border-black px-2 rounded-md shadow-md">
                {oteote} pcs
              </div>
              <button
                className="flex justify-center items-center bg-blue-500 font-extrabold w-7 h-7 rounded-md shadow-md transition duration-300"
                onClick={btnOteoteplus}
              >
                +
              </button>
            </div>
          </div>
        </div>
				{/* ote ote end */}
      </div>
			{/* total harga */}
			<div className="flex flex-col items-center">
					<div className="flex flex-col items-center p-7 rounded-2xl space-y-4 lg:mt-10 sm:mt-10 shadow-lg">
						<p className="font-sans font-bold">TOTAL HARGA</p>
						<p className="font-mono font-bold">Rp. {totalHarga}</p>
						<a href={`https://wa.me/6287856283653?text=assalamualaikum%0aNama : %0aAlamat : %0a%0aORDER%0a%0aAYAM GEPREK :%0aMerah(Pakai Nasi): ${merahNasi} pcs%0aMerah(Tanpa Nasi): ${merah} pcs%0aHijau(Pakai Nasi): ${hijauNasi} pcs%0aHijau(Tanpa Nasi): ${hijau} pcs%0aSerai(Pakai Nasi): ${seraiNasi} pcs%0aSerai(Tanpa Nasi): ${serai} pcs%0aTahu Petis : ${tahu} pcs%0aOte - Ote : ${oteote} pcs%0a%0aTOTAL HARGA : ${totalHarga}`} target="_blank" className="flex justify-center items-center bg-blue-500 font-bold text-white rounded-md shadow-md transition duration-300 px-4">SUBMIT</a>
					</div>
				</div>
    </div>
  );
}
