import useSWR from 'swr'

async function fetcher(url){
    const res = await fetch(url);
    return res.json();
}

export const useDataTransaksi = (trs) => {
    //url
    const url = "http://localhost:3000/api/catatan-transaksi";
    //data dan error
    const {data, error} = useSWR(url, fetcher, { initialData: trs, refreshInterval: 1000 });

    return {data, error}
}