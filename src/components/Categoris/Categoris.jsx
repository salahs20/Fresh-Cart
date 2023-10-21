import React from "react";

import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import style from "./Categoris.module.css";
export default function Categoris() {
  function getFeaturdBrands() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }
  let { data, isError, isFetched, isLoading } = useQuery(
    "getFeaturdProduct",
    getFeaturdBrands,
    {
      // cacheTime: 30000,
      // refetchOnMount: false,
    }
  );
  useQuery();
  return (
    <>
      {isLoading ? (
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
        <div className="row gy-4 mt-4">
          <h1 className="text-main fw-bold text-center ">All Categoris</h1>
          {data?.data.data.map((Categoris) => (
            <div key={Categoris.id} className="col-md-4">
              <div className="border border-3">
                <Link>
                  <div className="product p-2">
                    <img className="w-100  fixed-height" src={Categoris.image} alt="" />
                    
                    <div>
                      <h2 className="h5 text-center h-auto">{Categoris.name}</h2>
                    </div>
                    </div>
                  
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
