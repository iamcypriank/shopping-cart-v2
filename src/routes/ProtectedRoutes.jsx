import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children }){
    const { user } = useAuth();

    if(user==null) return <Navigate to="/login" /> 

    return <>
    { children }
    </>
}