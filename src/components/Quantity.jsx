import { useState } from "react"
import Button from "./Button"
import { useCart } from "../context/CartContext";
import { addToCart } from "../utils/utils";
export default function Quantity({ id , product }){
    const [ quantity, setQuantity ] = useState(1);

    const { cart , updateCart } = useCart();
    
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
            onClick={decrease} size="sm">-</Button>

            <p>{quantity}</p>

            <Button 
            onClick={increase} size="sm">+</Button>
        </form>
        <Button onClick={()=>{
            addToCart(cart,updateCart,id,product,quantity);
        }} >Add to Cart</Button>
    </div>
}