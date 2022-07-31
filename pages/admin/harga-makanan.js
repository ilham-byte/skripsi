import Sidebar from "../../components/admin/sidebar";
import {useDataHarga} from '../../lib/harga'
import Link from 'next/link'

export default function Harga() {
	const {data , error} = useDataHarga();

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
            Harga Makanan
          </h1>
          <div className="flex w-full h-screen items-center justify-center px-20">
						<table className="table-auto w-full text-center -mt-60">
              <thead>
                <tr>
                  <th className="border-2 border-black">Kode</th>
                  <th className="border-2 border-black">Nama Makanan</th>
                  <th className="border-2 border-black">Harga</th>
                  {/* <th className="border-2 border-black">Action</th> */}
                </tr>
              </thead>
              <tbody>
              { data.map((hrg, kode) => (
                <tr key={kode}>
									<td className="border-2 border-black font-bold text-blue-700">{hrg.kode}</td>
                  <td className="border-2 border-black">{hrg.nama}</td>
                  <td className="border-2 border-black">{hrg.harga}</td>
                  {/* <td className="border-2 border-black"><Link href={`/admin/update-makanan?kode=${hrg.kode}&nama=${hrg.nama}&harga=${hrg.harga}`}><a className="text-red-500 font-mono font-semibold">Update</a></Link></td> */}
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
