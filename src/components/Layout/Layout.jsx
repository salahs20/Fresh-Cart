import React from "react";
import style from "./Layout.module.css";
import Nave from "../Nave/Nave";
import Footer from "../Footer/Foooter";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <Nave />
      <Outlet />
      <Footer />
    </>
  );
}
