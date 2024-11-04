import React from "react";
import { NavLink } from "react-router-dom";

import CartIcon from "/icons/cart-icon.svg";
import HeartIcon from "/icons/heart-icon.svg";

const Navbar = () => {
  return (
    <div className="navbar bg-gadget-100 font-sans px-4 mt-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/statistics"}>Statistics</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
          </ul>
        </div>
        <h1 className="font-bold text-white">Gadget Heaven</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/statistics"}>Statistics</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden md:flex md:space-x-4">
        <button className="relative w-9 h-9 bg-white flex items-center justify-center rounded-full">
          <img src={CartIcon} alt="cart-icon" />
          <small className="absolute -top-3 text-yellow-300 right-0">1</small>
        </button>
        <button className="relative w-9 h-9 bg-white flex items-center justify-center rounded-full">
          <img src={HeartIcon} alt="heart-icon" />
          <small className="absolute -top-3 text-yellow-300 right-0">1</small>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
