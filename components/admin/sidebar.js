export default function Sidebar() {
  return (
    <div className="kiri bg-gray-900 w-2/12 h-screen">
      <a
        href="\admin"
        className="text-white flex justify-center text-center mt-5 mb-10 text-3xl font-mono w-full"
      >
        Geprek Pakistaji
      </a>
      <div className="flex flex-col gap-y-7 relative">
        <a
          href="\admin/harga-makanan"
          className="text-white text-2xl hover:border-b-2 hover:border-white hover:pb-2"
        >
          Harga Makanan
        </a>
        {/* <a
          href="\admin"
          className="text-white text-2xl hover:border-b-2 hover:border-white hover:pb-2"
        >
          Stock Makanan
        </a> */}
        {/* <a
          href="\admin"
          className="text-white text-2xl hover:border-b-2 hover:border-white hover:pb-2"
        >
          Verifikasi
        </a> */}
        <a
          href="\admin/transaksi"
          className="text-white text-2xl hover:border-b-2 hover:border-white hover:pb-2"
        >
          Catatan Transaksi
        </a>
        <a
          href="\admin/tambah-transaksi"
          className="text-white text-2xl hover:border-b-2 hover:border-white hover:pb-2"
        >
          Tambah Transaksi
        </a>
        {/* <a
          href="\admin"
          className="text-white text-2xl hover:border-b-2 hover:border-white hover:pb-2"
        >
          Info Dadakan
        </a> */}
      </div>
    </div>
  );
}
