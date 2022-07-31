import { db } from '../../lib/db'

const handler = async(req,res) => {
    const {kode, nama, harga} = req.body;

    try {
        if (!kode || !nama || !harga) {
            return res
                .status(400)
                .json({message: 'isian tidak boleh kosong'})
        }
        // const results = await sql_query(`
        const results = await db.query(
            `UPDATE makanan set kode = ?, nama = ?, harga = ? WHERE kode = ?`,[kode, nama, harga, kode]
            );

        return res.json(results)
    } catch (e) {
        res.status(500).json({message: e.message});
    }
    };

export default handler;