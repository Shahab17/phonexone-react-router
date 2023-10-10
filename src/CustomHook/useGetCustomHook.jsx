import { useEffect, useState } from "react";



const useGetCustomHook = () => {
    const [getItems, setGetItems] = useState()
    useEffect(() => {
        fetch('phones.json')
            .then(res => res.json())
            .then(data => setGetItems(data))
    }, [])
    return [getItems]
};

export default useGetCustomHook;