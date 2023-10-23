import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Categoris from "./components/Categoris/Categoris";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";
import Brands from "./components/Brands/Brands";
import Logout from "./components/Logout/Logout";
import UserContextProvider from "./Context/UserContext";
import Gurad from "./components/Gurad/Gurad";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CartContextProvider from "./Context/CartContext";
import { Offline, Online } from "react-detect-offline";
import { Toaster } from 'react-hot-toast';
let routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Gurad>
            <Home />
          </Gurad>
        ),
      },
      {
        path: "products",
        element: (
          <Gurad>
            {" "}
            <Products />
          </Gurad>
        ),
      },
      {
        path: "productDetails/:id",
        element: (
          <Gurad>
            {" "}
            <ProductDetails />
          </Gurad>
        ),
      },
      {
        path: "categoris",
        element: (
          <Gurad>
            {" "}
            <Categoris />
          </Gurad>
        ),
      },
      {
        path: "cart",
        element: (
          <Gurad>
            {" "}
            <Cart />
          </Gurad>
        ),
      },
      {
        path: "search",
        element: (
          <Gurad>
            {" "}
            <sear />
          </Gurad>
        ),
      },
      { path: "login", element: <Login /> },
      {
        path: "brands",
        element: (
          <Gurad>
            {" "}
            <Brands />
          </Gurad>
        ),
      },
      { path: "register", element: <Register /> },
      { path: "logout", element: <Logout /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  return (
    <>
      <CartContextProvider>
        <UserContextProvider>
          <RouterProvider router={routers}></RouterProvider>
          <div>
            <Offline>
              <div className="offline text-danger fw-bold ">
                <i className="fas fa-wifi text-danger"> </i> Only shown offline (surprise!)
              </div>
            </Offline>
          </div>
          <Toaster/>
        </UserContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
