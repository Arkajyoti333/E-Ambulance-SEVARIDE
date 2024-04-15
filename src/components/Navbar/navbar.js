import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import logo from "../../Assets/Sevaride.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="https://sasss.shop/">
        <img src={logo} alt="logo" className="logo" />
      </a>

      <div className="navMenu">
        <Link className="hover:cursor-grab ListItem ">Home</Link>
        <Link className="hover:cursor-grab  ListItem">Services</Link>
        <Link className="hover:cursor-grab  ListItem">About us</Link>
        <Link className="hover:cursor-grab  ListItem">Contact us</Link>
      </div>

      <div className="flex justify-end">
        {/* <button className="text-blue-500 hover:text-gray-300">Login/SignUp</button> */}
        <button className=" bg-red-400 mt-5 text-white border-none py-3 px-5 text-md cursor-pointer rounded-md  hover:scale-105 transition duration-300 ease-in-out">
          Login/SignUp
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
