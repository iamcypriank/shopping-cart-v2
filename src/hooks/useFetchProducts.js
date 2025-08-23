import { useEffect, useState } from "react"
import { BASE_URL } from "../utils/utils";

export const useFetchProducts = ( searchPath)=>{
    const [ list, updateList ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    
    

    const url =   BASE_URL+searchPath;


    useEffect(()=>{

        const controller = new AbortController();
        const signal = controller.signal;

        (async()=>{
        const options = {
            method : 'GET',
            signal
        }

        try{
            const response = await fetch(url,options);
            if(!response.ok) throw new Error('Error '+response.status);
            const data = await response.json();
            updateList(data);
        }catch(err){
            if(err.name!='AbortError')
                setError(err.message);
        }finally{
            setLoading(false);
        }
        })()

        return ()=> controller.abort();

    },[url])


    return { list , error , loading };
}