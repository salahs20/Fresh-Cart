import React from "react";

import logo from "../Image/freshcart-logo.svg";
import { Link } from "react-router-dom";
export default function Nave() {
  return (
    <>
      <nav className="navbar navbar-expand-lg h-auto">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="">
            <img src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active "
                  id="hover-nave"
                  aria-current="page"
                  to=""
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active "
                  id="hover-nave"
                  aria-current="page"
                  to="cart"
                >
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active "
                  id="hover-nave"
                  aria-current="page"
                  to="products"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active "
                  id="hover-nave"
                  aria-current="page"
                  to="categoris"
                >
                  Categoris
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active "
                  id="hover-nave"
                  aria-current="page"
                  to="brands"
                >
                  Brands
                </Link>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li  className="nav-link active d-flex align-items-center"
                  id="hover-nave"
                  aria-current="page">
                <i className="mx-2 fa-brands fa-instagram "></i>
                <i className="mx-2 fa-brands fa-facebook"></i>
                <i className="mx-2 fa-brands fa-tiktok"></i>
                <i className="mx-2 fa-brands fa-x-twitter"></i>
                <i className="mx-2 fa-brands fa-linkedin-in"></i>
                <i className="mx-2 fa-brands fa-youtube"></i>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active "
                  id="hover-nave"
                  aria-current="page"
                  to="register"
                >
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active "
                  id="hover-nave"
                  aria-current="page"
                  to="login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active "
                  id="hover-nave"
                  aria-current="page"
                  to="logout"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
