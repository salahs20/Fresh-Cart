import React, { useContext, useEffect } from "react";
import style from "./Layout.module.css";
import Nave from "../Nave/Nave";
import Footer from "../Footer/Foooter";
import { Outlet } from "react-router";
import { UserContext } from "../../Contects/UserContext";

export default function Layout() {
  let { setUserToken } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("userToken") != null) {
      setUserToken(localStorage.getItem("userToken"));
    }
  });
  return (
    <>
      <Nave />
      <div className="container">
      <Outlet />
      </div>
      <Footer />
    </>
  );
}
