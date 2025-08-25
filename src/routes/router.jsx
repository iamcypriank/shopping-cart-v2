import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Error from "../pages/Error"
import Navbar from "../components/Navbar"
import ProductPage from "../components/ProductPage"
import Cart from "../pages/Cart"
import Shop from "../pages/Shop"

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Navbar />,
        errorElement : <Error />,
        children : [
            {
                index: true,
                element : <Home />
            },
            {
                path : '/product/:id',
                element : <ProductPage />
            },
            {
                path : '/cart',
                element : <Cart />
                
            },
            {
                path : '/shop',
                element : <Shop />
            }
        ]
    }
])