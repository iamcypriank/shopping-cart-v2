import { useState } from "react"
import Button from "./Button"
import { useCart } from "../context/CartContext";
import { addToCart, getQuantity } from "../utils/utils";
import { Minus, Plus } from "lucide-react";


export default function Quantity({ id , product }){
    const { cart , updateCart } = useCart();
    
    const [ quantity, setQuantity ] = useState(getQuantity(cart,id));

    
    
    //increase quantity
    function increase(){
        if(quantity==10){
            return;
        }
        setQuantity(prev => prev + 1);
    }

    //decrease quantity
    function decrease(){
        if(quantity==1){
            return;
        }
        setQuantity(prev => prev - 1); 
    }


    return <div className="flex justify-between  ga2p- items-center w-full">
        <form 
        onSubmit={(e)=>{
            e.preventDefault();  
        }}
        className="flex gap-4">
            
            
            
            
            <Button 
            onClick={decrease} size="sm"><Minus size={16} /></Button>

            <p>{quantity}</p>

            <Button 
            onClick={increase} size="sm"><Plus size={16} /></Button>
        </form>
        <Button onClick={()=>{
            addToCart(cart,updateCart,id,product,quantity);
        }} >Add to Cart</Button>
    </div>
}