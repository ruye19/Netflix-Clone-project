import React, { useState, useEffect } from "react";
import netflixLogo from "../../assets/Netflix_Logo_RGB.png";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 46);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`headerAll ${scroll ? "headerScrolled" : ""}`}>
      {/* Left Section */}
      <div className="headerOption">
        <img src={netflixLogo} alt="Netflix Logo" />
        
        {/* Toggle Button (only visible on mobile) */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <li>Home</li>
          <li>TvShow</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>

      {/* Right Side Icons */}
      <div className="right-icons">
        <SearchIcon />
        <NotificationsIcon />
        <AccountCircleIcon />
        <ArrowDropDownIcon />
      </div>
    </div>
  );
}
