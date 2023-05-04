import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import logo from "./images/turnerscarslogo.png";

const Nav = ( ) => {
  const [showBars, setShowBars] = useState(true);
  const [showClose, setShowClose] = useState(false);
  const [showAltMenu, setshowAltMenu] = useState(false);

  const handleAltNav = () => {
    setShowBars(!showBars);
    setShowClose(!showClose);
    setshowAltMenu(!showAltMenu);
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar__menu--link">
        <img className="navbar__logo" src={logo} alt="realtor us" />{" "}
      </a>
      <div className="navbar__bars">
        {showBars === true ? (
          <FaBars className="navbar__bars--icon" onClick={handleAltNav} />
        ) : (
          <FaTimes className="navbar__bars--icon" onClick={handleAltNav} />
        )}
        {showAltMenu === true && (
          <div className="navbar__bars__container">
            <a href="/" className="navbar__bars__container--link">
              Find a Car
            </a>
            <a href="/" className="navbar__bars__container--link">
              Sell your Car
            </a>
            <a href="/" className="navbar__bars__container--link">
              Auctions
            </a>
            <a
              href="/"
              className="navbar__bars__container--link navbar__bars__container--button"
            >
              Log in / Register
            </a>
          </div>
        )}
      </div>
      <div className="navbar__menu">
        <a href="/" className="navbar__menu--link">
        Find a Car
        </a>
        <a href="/" className="navbar__menu--link">
        Sell your Car
        </a>
        <a href="/" className="navbar__menu--link">
        Auctions
        </a>
        <a href="/" className="navbar__menu--link navbar__menu--button">
          Log in / Register
        </a>
      </div>
    </nav>
  );
};

export default Nav;
