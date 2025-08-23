import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
        <RouterProvider router={router} />
    </CartContextProvider>
  )
}
export default App;
