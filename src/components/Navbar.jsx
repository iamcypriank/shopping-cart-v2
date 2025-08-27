import { CircleUser, ShoppingBag, ShoppingCart, UserCircle } from "lucide-react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Loading from "./Loading";

export default function Navbar(){
    const { cart } = useCart();
    return <main className="h-full">
        <header className="flex justify-between px-8 py-4 border-b-2 border-gray-200 dark:border-gray-800  bg-bg-secondary-light dark:bg-bg-secondary-dark">
            <Link to="/"><div className="items-center flex gap-1">
                <ShoppingCart className="text-accent-primary" />
                <h1 className="text-accent-primary">
                QuickCart
                </h1>
            </div></Link>
            <nav className="flex gap-4">
                <Link to="/shop"><p className="font-bold">shop</p></Link>
                <div className="relative"><Link to='/cart'><ShoppingBag className="text-black dark:text-white" />
                {cart.length!=0 && <p 
                className="absolute top-[-5px] right-[-5px] text-[10px] h-[16px] w-[16px] justify-center rounded-full flex items-center text-white dark:text-black bg-bg-secondary-dark dark:bg-bg-secondary-light">
                {cart.length}</p>}</Link></div>
                <Link to="/profile"><CircleUser  /></Link>
               
            </nav>
        </header>
        <Outlet />
    </main>
}