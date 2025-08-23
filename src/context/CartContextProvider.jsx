import { useState } from "react"
import { CartContext } from "./CartContext"
import Quantity from "../components/Quantity";

export default function CartContextProvider({children}){
    const [ cart, updateCart ] = useState([]);
    return <CartContext.Provider value={{ cart, updateCart }}>
        {children}
    </CartContext.Provider>
}