import React, { useState } from "react";

// import style from "./Register.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import { useNavigate } from "react-router";

export default function Register() {
  let navigate=useNavigate();
  let [isloading, setisLoadig] = useState(false);
  let [err, setErr] = useState(null);
  async function sendData(values) {
    setisLoadig(true);
    let { data } = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
      .catch((err) => {
        console.log(err.response.data.message);
        setErr(err.response.data.message);
        setisLoadig(false);
      });
    if (data.message === "success") {
      setisLoadig(false);
      navigate('/login')
    }
    console.log("response ", data);
  }

  const passwordRegux = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const phoneRegux = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
  let validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "must be more than 3 characters")
      .max(21, "must be less than 21 characters")
      .required("Name is Required"),
    email: Yup.string()
      .email("Email Format is not Valid")
      .required("Email is Required"),
    phone: Yup.string()
      .matches(phoneRegux, "Mobile is not Valid")
      .required("Mobile is Required"),
    password: Yup.string()
      .matches(passwordRegux, "Password is not Valid")
      .required("Password is Required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password"), "password is not match"])
      .required("rePassword is required"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: sendData,
  });
  return (
    <>
      <div className="w-75 mx-auto">
        <h1>Register Now :</h1>
        {err ? <div className="alert alert-danger">{err}</div> : ""}

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="username">Name :</label>
          <input
            className="form-control"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            id="username"
            type="text"
          />

          {formik.errors.name && formik.touched.name ? (
            <div className="alert alert-danger">{formik.errors.name}</div>
          ) : null}

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

          <label htmlFor="userphone">Phone :</label>
          <input
            className="form-control"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            id="userphone"
            type="tel"
          />
          {formik.errors.phone && formik.touched.phone ? (
            <div className="alert alert-danger">{formik.errors.phone}</div>
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
          <label htmlFor="userrePassword">RePassword :</label>
          <input
            className="form-control"
            name="rePassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.rePassword}
            id="userrePassword"
            type="password"
          />
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div className="alert alert-danger">{formik.errors.rePassword}</div>
          ) : null}
          {isloading ? (
            <InfinitySpin width="200" color="#4fa94d" />
          ) : (
            <button className="btn btn-success my-4" type="submit">
              Regester
            </button>
          )}
        </form>
      </div>
    </>
  );
}
