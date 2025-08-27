import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Error from "../pages/Error"
import Navbar from "../components/Navbar"
import ProductPage from "../components/ProductPage"
import Cart from "../pages/Cart"
import Shop from "../pages/Shop"
import Login from  "../pages/Login"
import Profile from "../pages/Profile"
import ProtectedRoutes from "./ProtectedRoutes"
import AuthContextProvider from "../context/AuthContextProvider"

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
            },
            {
                path : 'profile',
                element : <ProtectedRoutes><Profile /></ProtectedRoutes>

            },
            {
                path : '/login',
                element : <Login />
            }
        ]
    }
])