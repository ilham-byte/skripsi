import useSWR from 'swr'

async function fetcher(url){
    const res = await fetch(url);
    return res.json();
}

export const useDataHarga = (hrg) => {
    //url
    const url = "http://localhost:3000/api/harga";
    //data dan error
    const {data, error} = useSWR(url, fetcher, { initialData: hrg, refreshInterval: 1000 });

    return {data, error}
}