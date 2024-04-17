import React from "react";
import  Footer  from "../components/Footer/footer.js";
import  Navbar  from "../components//Navbar/navbar.js";
import { Outlet } from "react-router-dom";

const Root=()=>{

    return(
        <>
           <Navbar/>
           <Outlet/>
           <Footer/>
        </>
    );
}

export default Root;