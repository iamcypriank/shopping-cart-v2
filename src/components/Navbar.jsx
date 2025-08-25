import { ShoppingBag, ShoppingCart, UserCircle } from "lucide-react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar(){

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
                <Link to='/cart'><ShoppingBag className="text-black dark:text-white" /></Link>
                <UserCircle  className="text-black dark:text-white" />
            </nav>
        </header>
        <Outlet />
    </main>
}