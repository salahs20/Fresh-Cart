import React, { useEffect, useState } from "react";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";

export default function FeturdProduct() {
  let { addToCart } = useContext(cartContext);
  async function addCart(id) {
    let { data } = await addToCart(id);
    console.log(data);
  }
  function getFeaturdProduct() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }
  let { data, isLoading, isFetching, isError } = useQuery(
    "getFeaturdProduct",
    getFeaturdProduct,
    {
      cacheTime: 30000,
      refetchOnMount: false,
    }
  );
  return (
    <>
      {isLoading ? (
        <div className="vh-100 w-l00 d-flex justify-content-center align-items-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />{" "}
        </div>
      ) : (
        <div className="row gy-4">
          {data?.data.data.map((product) => (
            <div key={product.id} className="col-md-3">
              <div className="product p-2">
                <Link to={`/productDetails/${product._id}`}>
                  <img className="w-100" src={product.imageCover} alt="" />
                  <h2 className="font-sm text-main fw-bold">
                    {product.category.name}
                  </h2>
                  <h2 className="h5 fw-bold">
                    {" "}
                    {product.title.split(" ").slice(0, 2).join(" ")}
                  </h2>
                  <div className="d-flex justify-content-between ">
                    <span>{product.price}EGP</span>
                    <span>
                      <i className="fas fa-star rating-color"></i>
                      {product.ratingsAverage}
                    </span>
                  </div>
                </Link>
                <button onClick={()=> addCart(product._id)} className="btn text-white w-100 font-sm bg-main ">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
