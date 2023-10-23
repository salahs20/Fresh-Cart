import axios from "axios";
import { createContext } from "react";

export let cartContext = createContext();

export default function CartContextProvider({ children }) {

  async function addToCart(id) {
    // console.log(id);
    return await axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          productId: id,
        },
        {
          headers: {
            token: localStorage.getItem("userToken"),
          },
        }
      )
      .then((res) => res)
      .catch((err) => err);
  }
  function getCart() {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/cart`,{
        headers:{token: localStorage.getItem("userToken")},
      })
      .then((res) => res)
      .catch((err) => err);
  }
  function removeCartItem(id) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
        headers:{token: localStorage.getItem("userToken")},
      })
      .then((res) => res)
      .catch((err) => err);
  }
  return (
    <cartContext.Provider value={{ addToCart, getCart , removeCartItem}}>
      {" "}
      {children}
    </cartContext.Provider>
  );
}
