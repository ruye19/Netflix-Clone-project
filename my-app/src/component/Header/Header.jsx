import React from "react";
import netflixLogo from "../../assets/Netflix_Logo_RGB.png";
import "./Header.css";
import { Search, Bell, User } from "lucide-react";
import { ChevronDown } from "lucide-react";


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
        <Search size={24} className="cursor-pointer text-gray-600 hover:text-white" />
        <Bell size={24} className="cursor-pointer text-gray-600 hover:text-white" />
        <User size={24} className="cursor-pointer text-gray-600 hover:text-white" />
        <ChevronDown size={24} className="cursor-pointer text-gray-600 hover:text-white" />

      </div>
    </div>
  );
}
