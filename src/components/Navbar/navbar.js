import React from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/Sevaride.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="https://sasss.shop/">
        <img src={logo} alt="logo" className="logo" />
      </a>

      <div className="navMenu">
       
        <NavLink
            to="/"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-500" : "text-gray-600"} hover:cursor-grab  ListItem`
            }
            style={{ textDecoration: "none" }}
          >
            Home
          </NavLink>
       
        <NavLink
            to="/services"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-500" : "text-gray-600"} hover:cursor-grab  ListItem`
            }
            style={{ textDecoration: "none" }}
          >
            Services
          </NavLink>
        <NavLink
            to="/about-us"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-500" : "text-gray-600"} hover:cursor-grab  ListItem`
            }
            style={{ textDecoration: "none" }}
          >
         About us
          </NavLink>
        <NavLink
            to="/contact"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-500" : "text-gray-600"} hover:cursor-grab  ListItem`
            }
            style={{ textDecoration: "none" }}
          >
            Contact
          </NavLink>
      </div>

      <div className="flex justify-end">
        {/* <button className="text-blue-500 hover:text-gray-300">Login/SignUp</button> */}
        <button className=" bg-red-400 mt-5 text-white border-none py-3 px-5 text-md cursor-pointer rounded-md  hover:scale-105 transition duration-300 ease-in-out">
        
          <Link to="/login"> Login/SignUp</Link>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
