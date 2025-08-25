import { useMemo } from "react";
import Button from "../components/Button";
import ProductInCart from "../components/ProductInCart";
import { useCart } from "../context/CartContext"
import { calTotal } from "../utils/utils";

export default function Cart(){

    const { cart } = useCart();
    

    const total = useMemo(()=>{
        return calTotal(cart);
    },[cart])
    
    return <>
        { cart.length==0 && <p className="mt-30 text-center">Cart is Empty</p> }
        { cart.length>0 && <div className="p-4 md:grid md:grid-cols-[1fr_auto_auto] gap-8">
            <section className="flex flex-col gap-4">{cart.map((item)=>{
            return <div key={item.product.id} className="flex flex-col gap-4"><ProductInCart  item={item} /><hr className="border-gray-200" /></div>
        })}
        </section>
        <div className="max-md:hidden w-[1px] h-full bg-gray-200" ></div>
        <section className="p-4 gap-2 flex flex-col w-full">
            <h1>Total</h1>
            <p>${total}</p>
            <div className="flex gap-2 w-full">
                <input className="p-2 outline-accent-primary border-1 rounded-sm w-full border-black" type="text" placeholder="promo code" />
                <Button>apply</Button></div>
            <Button onClick={()=>{}} variant="secondary" custom="w-full">Checkout</Button>
        </section>
        </div>}
        </>
    
}