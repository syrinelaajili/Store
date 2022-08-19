import React from "react";
import "../../styles/header.css";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import logo from "../../assets/imgs/viking.webp";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-navbar">
      <ul></ul>
      <div className="payment">
        <ul>
          <li>
            <form action="">EUR</form>
          </li>
          <li>
            <a href="" style={{ width: "200px" }}>
              <FaUserAlt />
              Connexion
            </a>
          </li>
        </ul>
      </div>
      <div>
        <div className="div-navbar">
          <img className="logo" src={logo} alt="" />
          <ul className="navbar">
            <li>
              <Link to="/" className="home">Home</Link>
            </li>
            <li>
              <Link to="/Products">  Products</Link>
            </li>
          </ul>
        </div>

        {/* <form action="search"></form> */}
      </div>
    </div>
  );
}
