// import React from "react";
// import style from "./CategorisDetails.module.css";
// import axios from "axios";
// import { useParams } from "react-router";
// import { useQuery } from "react-query";
// import { TailSpin } from "react-loader-spinner";
// export default function CategorisDetails() {
//   let { id } = useParams();

//   function getCategoridDetails(id) {
//     return axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`);
//   }
//   let { data, isError, isFetched, isLoading } = useQuery(
//     "catigoridDetails",
//     () => getCategoridDetails(id)
//   );
//   return (
//     <>
//       {isLoading ? (
//         <div className="vh-100 w-l00 d-flex justify-content-center align-items-center">
//           <TailSpin
//             height="80"
//             width="80"
//             color="#4fa94d"
//             ariaLabel="tail-spin-loading"
//             radius="1"
//             wrapperStyle={{}}
//             wrapperClass=""
//             visible={true}
//           />{" "}
//         </div>
//       ) : (
//         <div className="row">
          
//             <img src={data?.data.data.image} alt="" />
//             <h2>{data?.data.data.name}</h2>
//           </div>
        
//       )}
//     </>
//   );
// }
