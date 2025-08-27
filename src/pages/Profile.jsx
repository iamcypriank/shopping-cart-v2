import { useState } from "react";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";

export default function Profile(){
    const { user , setUser , setToken } = useAuth();
    const [ process , setProcess ] = useState(false); 
    if(!user) return <Navigate to="/login" />

    return <section className="p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
            <img className="self-center h-[100px] w-[100px]  rounded-full" src={user.avatar} />
            <div className="flex flex-col gap-2">
                <h3 className="self-center">{user.name}</h3>
            </div>
        </div>
        <div className="self-center">
            <Button onClick={()=>{
            setProcess(true);
            setUser(null);
            setToken(null);
            localStorage.removeItem('access_token')
        }}>{ process ? <Loading color="white" /> : 'logout' }</Button>
        </div>
    </section>
}