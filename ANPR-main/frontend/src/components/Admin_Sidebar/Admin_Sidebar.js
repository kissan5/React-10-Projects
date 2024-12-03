import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaCog,
  FaHome,
  FaHeart,
  FaList,
  FaSignOutAlt,
  FaUsers,
} from "react-icons/fa";
import "./Admin_Sidebar.css";

const Sidebar = () => {
  const adminData = JSON.parse(localStorage.getItem("admins"));
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("admins");
      navigate("/login");
    }
  };

  const handleNameClick = () => {
    navigate("/adminlayout/adminlist");
  };

  return (
    <div className="sidebar open">
      {adminData && (
        <div className="user-info" onClick={handleNameClick}>
          <p className="user-name">{adminData.name}</p>
          <p className="user-email">{adminData.email}</p>
        </div>
      )}
      <ul className="sidebar-menu">
        <li>
          <NavLink
            to="/adminlayout/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaHome className="icon" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/adminlayout/admin_users"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaUsers className="icon" /> Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/adminlayout/adminlist"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaList className="icon" /> Lists
          </NavLink>
        </li>
        <li>
          <Link to="#" className="link">
            <FaHeart className="icon" /> Favorites
          </Link>
        </li>
        <li>
          <Link to="#" className="link">
            <FaCog className="icon" /> Settings
          </Link>
        </li>
        <li className="logout" onClick={handleLogout}>
          <FaSignOutAlt className="icon" /> Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
