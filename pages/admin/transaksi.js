import Sidebar from "../../components/admin/sidebar";
import {useDataTransaksi} from '../../lib/swr-fetch'

export default function Transaksi() {
  const {data , error} = useDataTransaksi();

    if(error){
        return <div> Error loading</div>
    }
    if(!data){
        return <div>Loading......</div>
    }

  return (
    <div>
      <div className="flex">
        {/* kiri */}
        <Sidebar></Sidebar>

        {/* kanan */}
        <div className="kanan bg-gray-300 w-10/12 h-screen flex flex-col">
          <h1 className="bg-gray-900 flex items-center justify-center text-white font-semibold font-mono text-3xl h-24">
            Catatan Transaksi
          </h1>
          <div className="p-10">
            <table className="table-auto w-full text-center">
              <thead>
                <tr>
                  <th className="border-2 border-black">Tanggal</th>
                  <th className="border-2 border-black">Hari</th>
                  <th className="border-2 border-black">Kode</th>
                  <th className="border-2 border-black">Nama Makanan</th>
                  <th className="border-2 border-black">Harga</th>
                  <th className="border-2 border-black">Satuan</th>
                  <th className="border-2 border-black">Total</th>
                  <th className="border-2 border-black">Jumlah Total</th>
                </tr>
              </thead>
              <tbody>
              { data.map((trs, kode) => (
                <tr key={kode}>
                  <td className="border-2 border-black">{trs.tanggal}</td>
                  <td className="border-2 border-black">{trs.hari}</td>
                  <td className="border-2 border-black font-bold text-blue-700">{trs.kode}</td>
                  <td className="border-2 border-black">{trs.nama_makanan}</td>
                  <td className="border-2 border-black">{trs.harga}</td>
                  <td className="border-2 border-black">{trs.satuan}</td>
                  <td className="border-2 border-black">{trs.total}</td>
                  <td className="border-2 border-black">{trs.jumlah_total}</td>
                </tr>
                ))
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
