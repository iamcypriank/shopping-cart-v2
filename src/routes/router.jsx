import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Error from "../pages/Error"
import Navbar from "../components/Navbar"
import ProductPage from "../components/ProductPage"

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
            }
        ]
    }
])