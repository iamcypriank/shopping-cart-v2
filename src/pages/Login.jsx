import Input from "../components/Input"
import Button from "../components/Button"
import { useState } from "react"
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { login } from "../utils/utils";
import Loading from "../components/Loading";

export default function Login(){

    const [ email , setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState(null);
    const {  user , loading , setToken } = useAuth();
    const [ process , setProcess ] = useState(false);
    if(loading) return null;
    if(user) return <Navigate to="/profile" />

    const options = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({ email : email,password : password })
    }

    function handleLogin(){
        setProcess(true);
        (async()=>{
            const token = await login(options,setError);
            if(token) {
                setProcess(false);
                setToken(token.access_token);
                localStorage.setItem('access_token',token.access_token);
            }
            else {
                setProcess(false);
            }
        })();
    }
    

    return <>{ !loading && <div className=" mt-40  flex  justify-center items-center">
        <form
        onSubmit={(e)=>{
            e.preventDefault();
            handleLogin();

        }}
    className="p-4  relative flex flex-col gap-2 shadow-2xl py-16 rounded-md"
    >
        
        <Input label="email" onChange={(e)=>{
            setEmail(e.target.value);
        }}  value={email} type="email" />
        <Input label="password" onChange={(e)=>{
            setPassword(e.target.value);
        }} value={password} type="password" />
        <Button type="submit"  variant="custom" custom="font-medium bg-accent-primary text-white ">{ process ? <Loading color="white" /> : 'login' }</Button>
        <p className=" text-center text-sm text-red-400">{error}</p>
    </form>
    </div> }</>
}