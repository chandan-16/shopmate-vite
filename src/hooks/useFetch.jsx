import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        const fetchProducts = async () => {
            setLoading(true);
            const response = await fetch(url);
            const result = await response.json();
            setLoading(false);
            setData(result);
        };
        fetchProducts();
    },[url])

  return { data : data, loading : loading }
}
