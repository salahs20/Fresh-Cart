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
  return <cartContext.Provider value={{addToCart}}> {children}</cartContext.Provider>
}
