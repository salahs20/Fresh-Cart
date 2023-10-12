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

let routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "categoris", element: <Categoris /> },
      { path: "cart", element: <Cart /> },
      { path: "login", element: <Login /> },
      { path: "brands", element: <Brands /> },
      { path: "register", element: <Register /> },
      { path: "logout", element: <Logout/> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
