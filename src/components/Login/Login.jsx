import React, { useContext, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import { useNavigate } from "react-router";
import { UserContext } from "../../Contects/UserContext";

export default function Register() {
  let { setUserToken } = useContext(UserContext);
  let navigate = useNavigate();
  let [isloading, setisLoadig] = useState(false);
  let [err, setErr] = useState(null);

  async function sendData(values) {
    setisLoadig(true);
    let { data } = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      .catch((err) => {
        console.log(err.response.data.message);
        setErr(err.response.data.message);
        setisLoadig(false);
      });
    if (data.message === "success") {
      setisLoadig(false);
      localStorage.setItem("userToken", data.token);
      setUserToken(data.token);
      navigate("/");
    }
  }

  let validationSchema = Yup.object({
    email: Yup.string().required("Email is Required"),

    password: Yup.string().required("Password is Required"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: sendData,
  });
  return (
    <>
      <div className="w-75 mx-auto">
        <h1>Login Now :</h1>
        {err ? <div className="alert alert-danger">{err}</div> : ""}

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="useremail">Email :</label>
          <input
            className="form-control"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            id="useremail"
            type="email"
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="alert alert-danger">{formik.errors.email}</div>
          ) : null}
          <label htmlFor="userpassword">Password :</label>
          <input
            className="form-control"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            id="userpassword"
            type="password"
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="alert alert-danger">{formik.errors.password}</div>
          ) : null}
          {isloading ? (
            <InfinitySpin width="200" color="#4fa94d" />
          ) : (
            <button className="btn btn-success my-4" type="submit">
              Login
            </button>
          )}
        </form>
      </div>
    </>
  );
}
