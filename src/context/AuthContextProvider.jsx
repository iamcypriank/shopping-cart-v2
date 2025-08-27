import { Children, useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { Navigate } from "react-router-dom";
import { getUser } from "../utils/utils";
import Loading from "../components/Loading";

export default function AuthContextProvider({ children }){
    const [ user , setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ token , setToken ] = useState(localStorage.getItem('access_token') || null);

    useEffect(()=>{
        if(!token) {
            setUser(null);
            setLoading(false);
            return;
        }

        const controller = new AbortController();
        const signal = controller.signal;
        
        const options = {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            },
            signal
        }
        
        const fetchUser = async()=>{
            try{
                const user = await getUser(options);
                setUser(user);
                setTimeout(()=>{
                    setLoading(false);
                },1000)
            }catch(err){
                console.log(err.message);
            }
        };
        fetchUser();
        
        return ()=> controller.abort();
    },[token])

    return <>
    { loading ? <div className="mt-40"><Loading /></div> : 
    <AuthContext.Provider value={{ user , setUser , token , setToken }}>
        {children}
    </AuthContext.Provider> }
    </>
}