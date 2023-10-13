import React from "react";
import style from "./Gurad.module.css";
import { Navigate } from "react-router";

export default function Gurad({children}) {
  if (localStorage.getItem("userToken") != null) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
  return <>
  </>;
}
