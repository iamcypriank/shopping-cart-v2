import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import CartContextProvider from "./context/CartContextProvider";
import AuthContextProvider from "./context/AuthContextProvider";

function App() {
  return (
    <CartContextProvider>
      <AuthContextProvider>
        <RouterProvider router={router} />
        </AuthContextProvider>
    </CartContextProvider>
  )
}
export default App;
