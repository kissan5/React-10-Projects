import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const userAuth = localStorage.getItem("users");
  const adminAuth = localStorage.getItem("admins");
  const navigate = useNavigate();

  const getUserName = () => {
    if (userAuth) {
      const userData = JSON.parse(userAuth);
      return userData ? userData.name : "User";
    } else if (adminAuth) {
      const adminData = JSON.parse(adminAuth);
      return adminData ? adminData.name : "Admin";
    }
    return "Guest";
  };

  const handleSignInClick = () => {
    navigate("/signin");
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("users");
      localStorage.removeItem("admins");
      navigate("/");
    }
  };

  const handleUserNameClick = () => {
    if (adminAuth) {
      navigate("/adminlayout");
    }
  };

  return (
    <Navbar className="dark-navbar justify-between">
      <div className="mx-auto w-full items-center justify-between flex max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <Navbar.Brand className="brand">
          <div className="logo-wrapper">
            <Link to="/">
              <div className="logo-wrapper">
                <img src="logo4.png" alt="Logo" className="logo" />
              </div>
            </Link>
          </div>
        </Navbar.Brand>
        <Nav className="flex items-center ">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/camera" className="nav-link">
            Camera
          </Link>

          {userAuth || adminAuth ? (
            <div className="getUserName">
              {adminAuth ? (
                <strong className="username" onClick={handleUserNameClick}>
                  {getUserName()}
                </strong>
              ) : (
                <span className="username">{getUserName()}</span>
              )}
              <FaSignOutAlt className="fa logout-icon" onClick={handleLogout} />
            </div>
          ) : (
            <Button
              variant="primary"
              className="sign-in-button"
              onClick={handleSignInClick}
            >
              Sign In
            </Button>
          )}
        </Nav>
      </div>
    </Navbar>
  );
};

export default Header;
