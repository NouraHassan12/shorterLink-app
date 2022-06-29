import React, { useState } from "react";
import logo from "../../Images/logo.svg";
import "./NavbarStyle.css";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const HandleShowMenu = () => {
    setShowMenu(true);
  };
  const handleCloseMenu = () => {
    setShowMenu(false);
  };
  return (
    <header>
      <div className={`${showMenu ? "" : "left"}`}>
        <img className="nav-logo" src={logo} alt="logo" />
        <ul className={`${showMenu ? "nav-menu" : " show-menu"}`}>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Resources
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link sm" href="#">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link sm active signup">
              Sign up
            </a>
          </li>
        </ul>
      </div>
      <div className="right">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#">Login</a>
          </li>
          <li className="nav-item">
            <a href="#" className="active">
              Sign up
            </a>
          </li>
        </ul>
      </div>
      {!showMenu && (
        <div className="hamburger">
          <MenuIcon onClick={HandleShowMenu} />
        </div>
      )}
      {showMenu && (
        <div onClick={handleCloseMenu}>
          <CloseIcon />
        </div>
      )}
    </header>
  );
}

export default Navbar;
