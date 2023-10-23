import React, { useContext, useEffect, useState } from "react";
import style from "./Cart.module.css";
import { cartContext } from "../../Context/CartContext";
import { TailSpin } from "react-loader-spinner";
export default function Cart() {
  const [cartItem, setCartItem] = useState(null);
  const [loading, setLoading] = useState(true);
  let { getCart, removeCartItem } = useContext(cartContext);

  async function removeItem(id) {
    let { data } = await removeCartItem(id);
    console.log(data);
    setCartItem(data);
  }

  async function getCartItems() {
    let { data } = await getCart();
    setCartItem(data);
    setLoading(false);
    console.log(data);
  }
  useEffect(() => {
    getCartItems();
  }, []);
  return (
    <>
      {loading ? (
        <div className="vh-100 w-l00 d-flex justify-content-center align-items-center">
          <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="bg-main-light p-4">
          <h2>Shop Cart</h2>
          <h2 className="h6 text-main fw-bold">
            Total Price : {cartItem.data.totalCartPrice} EGP
          </h2>
          <h2 className="h6 text-main fw-bold">
            Total Cart Item : {cartItem.numOfCartItems}
          </h2>
          {cartItem.data.products.map((product) => (
            <div key={product._id} className="row border-bottom py-3">
              <div className="col-md-1">
                <img
                  className="w-100"
                  src={product.product.imageCover}
                  alt=""
                />
              </div>
              <div className="col-md-11 d-flex justify-content-between">
                <div>
                  <h3 className="h6  fw-bold">
                    {product.product.title.split(" ").slice(0, 5).join(" ")}
                  </h3>
                  <h3 className="h6  text-main">Price : {product.price} EGP</h3>
                  <button
                    onClick={() => removeItem(product.product.id)}
                    className="btn p-0"
                  >
                    <i className="fas fa-trash-can text-main"></i> Remove
                  </button>
                </div>
                <div>
                  <button className="btn btn-sm border me-1"> + </button>
                  <span>{product.count}</span>
                  <button className="btn btn-sm border ms-1"> - </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
