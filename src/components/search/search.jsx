import { Formik, useFormik } from "formik";
import React from "react";



export default function Search() {



  return <>

          <input
            className="form-control rounded-4  mt-5 mb-4"
            name="search"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.name}
            id="search"
            type="search"
            placeholder="Search"
          />
  
  </>;
}
