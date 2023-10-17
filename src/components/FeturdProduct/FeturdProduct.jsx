import React, { useEffect, useState } from "react";
import axios from "axios";
export default function FeturdProduct() {
  const [FeturdProduct, setFeturdProduct] = useState([]);
  async function getFeaturdProduct() {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products`
    );
    setFeturdProduct(data.data);
    console.log(data);
  }
  useEffect(() => {
    getFeaturdProduct();
  }, []);

  return (
    <>
      <div className="row gy-3">
        {FeturdProduct.map((product) => (
          <div key={product.id} className="col-md-2">
            <img className="w-100" src={product.imageCover} alt="" />
            <h2 className="font-sm text-main fw-bold">{product.category.name}</h2>
           <h2 className="h5"> {product.title.split(' ').slice(0,2).join(' ')}</h2>
           <div className="d-flex justify-content-between ">
            <span>{product.price}EGP</span>
            <span><i className="fas fa-star rating-color"></i>{product.ratingsAverage}</span>
           </div>
          </div>
        ))}
      </div>
    </>
  );
}

