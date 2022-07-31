//@ts-check

import { db } from "../../lib/db";

const handler = async(req,res) => {
const {tanggal, hari, kode, namamakanan, harga, satuan, total, jumlahtotal} = req.body;
try {
    if (!tanggal || !hari || !kode || !namamakanan || !harga || !satuan || !total || !jumlahtotal) {
        return res
            .status(400)
            .json({message: 'Input harus di isi Semua'})
    }

    const results = await db.query(`
        INSERT INTO transaksi (tanggal, hari, kode, nama_makanan, harga, satuan, total, jumlah_total)
        VALUES (?,?,?,?,?,?,?,?)`,[tanggal, hari, kode, namamakanan, harga, satuan, total, jumlahtotal]
        );
    await db.end;

    return res.json(results)
} catch (e) {
    res.status(500).json({message: e.message});
}
};

export default handler;