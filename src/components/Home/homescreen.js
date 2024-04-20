import React, { useState } from "react";
import bg from "../../Assets/file.png";
import "./homescreen.css";
import { Link } from "react-scroll";
import { BookNow } from "../../Pages";
import { NavLink } from "react-router-dom";

const HomeScreen = () => {
  const [isBookingPageOpen, setIsBookingPageOpen] = useState(false);
  const handleClickBookNow = () => {
    setIsBookingPageOpen(true);
  };

  return (
    <div className="container-home">
      {/* booking part */}
      <div className="booking">
        <h1>24/7 Emergency</h1>
        <h1>Ambulance Care with SevaRide</h1>
        <h2>For Emergency Medical Service</h2>
        <p>
          Help / Rescues the Patient in case of the Emergency situation by doing
          just a click. SevaRide Ambulance comes right in front of the door for
          help.
        </p>

        <div>

          <div>
            <NavLink to="/BookNow">
              <button
                // onClick={handleClickBookNow}
                className=" bg-red-500 mt-5 text-white border-none py-3 px-10 text-lg cursor-pointer rounded-lg w-[70%] hover:scale-105 transition duration-300 ease-in-out"
              >
                Book Now
              </button>
            </NavLink>
          </div>

        </div>
        <div>
          <p>or</p>
          <h3>book our assistance</h3>
          {/* <a href='tel:+9123813528' role='button' className='callnow'><i className='telno'></i>+91 9123813528</a> */}
          <button className=" bg-white border-4 border-rose-500 text-rose-500 text-xl py-3 px-10 font-semibold cursor-pointer rounded-lg mt-3 w-[70%] hover:border-blue-400 hover:text-blue-400 transition-all duration-300 ease-in-out hover:tracking-wider">
            <a href='tel:+9123813528'>
              <i class="fas fa-phone"></i>+91 9123813528
            </a>
          </button>
        </div>
      </div>

      {/* background Part */}
      <div className="image-container">
        <img src={bg} alt="bg" className="bg-image" />
      </div>
    </div>
  );
};

export default HomeScreen;
