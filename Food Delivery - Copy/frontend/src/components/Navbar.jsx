import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../src/assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";

// Lucide icons
import {
  Search,
  ShoppingBasket,
  User,
  LogOut,
  PackageSearch,
} from "lucide-react";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <Link
          to="/about-us" 
          onClick={() => setMenu("about-us")}
          className={menu === "about-us" ? "active" : ""}
        >
          About us
        </Link>
        <Link
          to="/contact-us" 
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </Link>
      </ul>

      <div className="navbar-right">
        <Search className="icon" />

        <div className="navbar-search-icon">
          <Link to="/cart">
            <ShoppingBasket className="icon" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            <User className="icon" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <PackageSearch className="icon" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <LogOut className="icon" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
