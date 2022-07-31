import { useEffect, useState } from "react";
import Sidebar from "../../components/admin/sidebar";
import Router , {useRouter} from 'next/router';

const UpdateMakanan = () => {
  const [_kode, setKode] = useState('');
  const [_nama, setNama] = useState('');
  const [_harga, setHarga] = useState('');

  const router = useRouter();
  const {kode, nama, harga} = router.query;

  useEffect(() => {
    if (typeof kode == 'string') {
        setKode(kode);
    }
    if (typeof nama == 'string') {
        setNama(nama);
    }
    if (typeof harga == 'number') {
        setHarga(harga);
    }
  },[kode, nama, harga],)

  const submitHandler = async(e) => {
    e.preventDefault()
    try {
      const res = await fetch("http://localhost:3000/api/update-makanan", {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          kode: _kode,
          nama: _nama,
          harga: _harga
        }),
      })
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
      alert("Update Makanan Sukses")
      Router.push('/admin/harga-makanan')
    } catch (e) {
      throw Error(e.message); 
    }
  }

  return (
    <div>
      <div className="flex">
        {/* kiri */}
        <Sidebar></Sidebar>

        {/* kanan */}
        <div className="kanan bg-gray-300 w-10/12 h-screen flex flex-col">
          <h1 className="bg-gray-900 flex items-center justify-center text-white font-semibold font-mono text-3xl h-24">
            Update Makanan
          </h1>
          <div className="flex w-full h-screen items-center justify-center">
            <form onSubmit={submitHandler} className="p-5 border-2 rounded-md shadow-lg border-black">
                <div className="flex flex-col">
                    <label htmlFor="kode">Kode</label>
                    <input className="border-2 border-black rounded-md px-2 text-indigo-700" type="text" id="kode" value={_kode} onChange={(e) => setKode(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="nama">Nama Makanan</label>
                    <input className="border-2 border-black rounded-md px-2 text-indigo-700" type="text" id="nama" value={_nama} onChange={(e) => setNama(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="harga">Harga</label>
                    <input className="border-2 border-black rounded-md px-2 text-indigo-700" type="number" id="harga" value={_harga} onChange={(e) => setHarga(e.target.value)} />
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-sky-500 hover:bg-sky-400 hover:text-white px-4 py-1 text-center mt-3 rounded-md">Update</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateMakanan()