import React from "react";
import netflixLogo from "../../assets/Netflix_Logo_RGB.png";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Header() {
  return (
    <div className="headerAll">
      {/* Left Section */}
      <div className="headerOption">
        <ul>
          <li>
            <img src={netflixLogo} alt="Netflix Logo" />
          </li>
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
