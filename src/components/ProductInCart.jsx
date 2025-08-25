import { Trash} from "lucide-react";
import Button from "./Button";
import { Minus, Plus } from "lucide-react"
import { useCart } from "../context/CartContext";
import { addToCart, deleteFromCart } from "../utils/utils";

export default function ProductInCart({ item }){

    const { cart, updateCart } = useCart();

    function handleIncrease(){
        addToCart(cart,updateCart,item.id,item.product,item.quantity + 1);
    }


    function handleDecrease(){
        addToCart(cart,updateCart,item.id,item.product, item.quantity-1);
    }

    function handleDelete(){
        deleteFromCart(cart,updateCart,item.id);
    }



    return <article className="flex gap-4 w-full">
        <img className="max-w-[150px] min-w-[150px]"  src={item.product.images} alt="" />
        
        <div className="flex flex-col items-start gap-4 min-sm:flex-row  min-sm:items-center min-sm:justify-between w-full">
            <h1 className="" >{item.product.title}</h1>
            <div className="flex gap-16 max-sm:gap-4">
                <div className="flex justify-center items-center gap-4">
                <Button 
                onClick={handleDecrease}
                size="sm"><Minus size={16} /></Button>
                 <p>{item.quantity}</p>
                 <Button 
                  onClick={handleIncrease}
                size="sm"><Plus size={16} /></Button>
                 </div>

                 <div className="">
                     <Button
                     onClick={handleDelete} 
                      size="sm"><Trash size={16} /></Button>
                </div>

            </div>
            
            
            
        </div>
       
    </article>
}