import React from "react";
import style from "./Brands.module.css";
import { useQuery } from "react-query";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

export default function Brands() {
  function getFeaturdBrands() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
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
          <h1 className="text-main fw-bold text-center ">All Brands</h1>
          {data?.data.data.map((Brands) => (
            <div key={Brands.id} className="col-md-3">
              <div className="border border-2">
                <Link>
                  <img className="w-100" src={Brands.image} alt="" />
                  <h2 className="h5 text-center">{Brands.name}</h2>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
