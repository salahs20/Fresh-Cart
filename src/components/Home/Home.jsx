import React from "react";
import style from './Home.module.css'
import FeturdProduct from "../FeturdProduct/FeturdProduct";
import Search from "../search/search";
export default function Home() {
  return <>
      <Search/>
    <FeturdProduct/>
  </>;
}
