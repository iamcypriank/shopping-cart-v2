import { GanttChartSquare } from "lucide-react";
import { useCart } from "../context/CartContext"
import { addToCart, getQuantity } from "../utils/utils"
import Button from "./Button"
import { Link } from "react-router-dom"

export default function ProductCard({ product }){
    const { cart, updateCart } = useCart();
    
    return <>
    { product && <article className="min-w-[250px] max-w-[250px]  flex flex-col gap-4 shadow-lg rounded-b-md">
        <Link to={`/product/${product.id}`}><img className="h-[250px]" src={product.images} /></Link>
        <div className="flex gap-2 flex-col p-4">
             <Link to={`/product/${product.id}`}><h2 className="font-bold text-lg truncate overflow-hidden">{product.title}</h2></Link>
             
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="font-medium">${product.price}</h2>
                </div>
                <div className="self-end">
                    <Button onClick={()=>{
                        addToCart(cart,updateCart,product.id,product,getQuantity(cart,product.id)+1)
                    }}>Add to Cart</Button>
                </div>
            </div>
        </div>
    </article>}
    </>
}