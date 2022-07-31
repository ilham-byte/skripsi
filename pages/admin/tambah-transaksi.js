import { useState } from "react";
import Sidebar from "../../components/admin/sidebar";

export default function TambahTransaksi() {
  const [tanggal, setTanggal] = useState('');
  const [hari, setHari] = useState('');
  const [kode, setKode] = useState('');
  const [namamakanan, setNamamakanan] = useState('');
  const [harga, setHarga] = useState('');
  const [satuan, setSatuan] = useState('');
  // const [total, setTotal] = useState('');
  const total = harga * satuan;
  const [jumlahtotal, setJumlahtotal] = useState('');
  // const namamakanan = () => {
    // if (kode == "GPMN"){
    //   namamakanan = "Geprek Merah Nasi";
    // }else if (kode == "GPM"){
    //   namamakanan = "Geprek Merah";
    // }else {
    //   namamakanan = "";
    // }
  // }

  async function submitHandler(e) {
    e.preventDefault()
    try {
      const res = await fetch("http://localhost:3000/api/tambah-transaksi", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          tanggal,
          hari,
          kode,
          namamakanan,
          harga,satuan,
          total,
          jumlahtotal
        }),
      })
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
      alert("Penambahan catatan transaksi sukses")
    } catch (e) {
      throw Error(e.message);
    }
  }

  // const jumlah = harga * satuan;
  return (
    <div>
      <div className="flex">
        {/* kiri */}
        <Sidebar></Sidebar>

        {/* kanan */}
        <div className="kanan bg-gray-300 w-10/12 h-screen flex flex-col">
          <h1 className="bg-gray-900 flex items-center justify-center text-white font-semibold font-mono text-3xl h-24">
            Tambah Transaksi
          </h1>
          <div className="flex w-full h-screen items-center justify-center">
            <form onSubmit={submitHandler} className="p-5 border-2 rounded-md shadow-lg border-black">
              <div className="flex justify-between gap-y-4 items-center gap-x-5">
                <div>
                  <div className="flex flex-col">
                    <label htmlFor="tanggal">Tanggal</label>
                    <input className="border-2 border-black rounded-md px-2 text-indigo-700" type="date" id="tanggal" value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="hari">Hari</label>
                    <input className="border-2 border-black rounded-md px-2 text-indigo-700" type="text" id="hari" value={hari} onChange={(e) => setHari(e.target.value)} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="kode">Kode</label>
                    <input className="border-2 border-black rounded-md px-2 text-indigo-700" type="text" id="kode" value={kode} onChange={(e) => setKode(e.target.value)}/>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="namamakanan">Nama Makanan</label>
                    <input className="border-2 border-black rounded-md px-2 text-indigo-700" type="text" id="namamakanan" value={namamakanan} onChange={(e) => setNamamakanan(e.target.value)}/>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col">
                    <label htmlFor="harga">Harga</label>
                    <input className="border-2 border-black rounded-md px-2 text-indigo-700" type="number" id="harga" value={harga} onChange={(e) => setHarga(e.target.value)}/>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="satuan">Satuan</label>
                    <input className="border-2 border-black rounded-md px-2 text-indigo-700" type="number" id="satuan" value={satuan} onChange={(e) => setSatuan(e.target.value)}/>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="total">Total</label>
                    <input className="border-2 border-black rounded-md px-2 text-indigo-700" type="number" id="total" value={total} onChange={() => (e.target.value)}/>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="jumlahtotal">Jumlah Total</label>
                    <input className="border-2 border-black rounded-md px-2 text-indigo-700" type="number" id="jumlahtotal" value={jumlahtotal} onChange={(e) => setJumlahtotal(e.target.value)}/>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-sky-500 hover:bg-sky-400 hover:text-white px-4 py-1 text-center mt-3 rounded-md">Tambah Transaksi</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
