import React from "react";

import style from "./ProductDetails.module.css";
import axios from "axios";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { TailSpin } from "react-loader-spinner";

export default function ProductDetails() {
  let { id } = useParams();

  function getProductDedails(id) {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }
  let { data,isError,isFetched,isLoading} = useQuery("details", () => getProductDedails(id));
  return <>
  
    {isLoading?  <div className="vh-100 w-l00 d-flex justify-content-center align-items-center"><TailSpin
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/> </div>: 
  <div className="row py-5">
    <div className="col-md-3">
      <img className="w-100" src={data?.data.data.imageCover} alt="" />
    </div>
    <div className="col-md-9 d-flex align-items-center">
      <div>
      <h2 className="h4 mb-3">{data?.data.data.title}</h2>
      <p className="text-muted">{data?.data.data.description}</p>
      <h2 className="h5 text-main fw-bold">{data?.data.data.category.name}</h2>
      <div className="d-flex justify-content-between ">
                  <span>{data?.data.data.price}EGP</span>
                  <span>
                    <i className="fas fa-star rating-color"></i>
                    {data?.data.data.ratingsAverage}
                  </span>
                </div>
                <button className="btn text-white w-100 font-sm bg-main mt-2">
                  Add To Cart
                </button>
      </div>
    </div>
  </div>
}
  
  </>;
}