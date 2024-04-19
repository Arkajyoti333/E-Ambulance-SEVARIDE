import React from "react";
// import "./Services.css";

const Services = () => {
  return (
    <>
      <div className="flex flex-wrap  justify-center min-h-auto">
        <div className=" flex flex-col flex-wrap  items-center  justify-center  ">
          <div className="flex flex-col items-center bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 max-w-[80%]  p-4 rounded-md -mb-[70px]">
            <h2 className="text-center text-white text-3xl font-bold mb-4 p-3">
              Our Other Medical Services
            </h2> 
            <div className="relative flex flex-wrapjustify-center  p-4 m-4 ">
              <h3 className="text-center text-white font-semibold p-3">
                We at SevaRide provide our clients with a one-stop solution for all healthcare needs. We deliver an exclusive helpline number for ambulances and other healthcare services, ensuring 100% call answer assurance, 24*7, Pan-India (60+ Cities), under the same helpline number. One can also find services like Teleconsultation, E- Pharmacy, Diagnostics, Home health care, Elderly Care, mental wellness, etc.
              </h3>
            </div>
          </div>
          {/* <div class="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 w-full h-40"></div> */}


          {/* small card */}
          <div  className=" flex flex-wrap  flex-row justify-center items-center   min-w-[100%] min-h-auto  rounded-md ">

          <div className=" flex flex-wrap  flex-col items-center  m-6 min-w-[230px] min-h-[150px] shadow-lg rounded-md  bg-white hover:bg-pink-50 hover:cursor-pointer" >
             <div className="flex flex-col flex-wrap items-center bg-white max-w-30 mt-3 pt-3">
             <img src="https://medulance.com/assets/images/Consultant.png" alt="Description of the image" />
             </div>
             <p className="p-1 m-1 text-center font-semibold hover:text-pink-600 ">Consultant <span className="font-semibold text-xl pt-1 mt-1  ">&#8594;</span> </p>
          </div>
          <div className=" flex flex-wrap  flex-col items-center  m-6 min-w-[230px] min-h-[150px] shadow-md rounded-md bg-white  hover:bg-pink-50  hover:cursor-pointer" >
             <div className="relative flex flex-col flex-wrap items-center bg-white max-w-30 mt-3 pt-3">
             <img src="https://medulance.com/assets/images/health_care.png" alt="Description of the image" />
             </div>
             <p className="p-1 m-1 text-center font-semibold hover:text-pink-600 ">Home Healthcare<span className="font-semibold text-xl pt-1 mt-1  ">&#8594;</span> </p>
          </div>
          <div className=" flex flex-wrap  flex-col items-center  m-6 min-w-[230px] min-h-[150px] shadow-md rounded-md bg-white  hover:bg-pink-50 hover:cursor-pointer" >
             <div className="relative flex flex-col flex-wrap items-center bg-white max-w-30 mt-3 pt-3">
             <img src="https://medulance.com/assets/images/e-Pharmecy.png" alt="Description of the image" />
             </div>
             <p className="p-1 m-1 text-center font-semibold hover:text-pink-600 ">E-Pharmacy <span className="font-semibold text-xl pt-1 mt-1  ">&#8594;</span> </p>
          </div>
          <div className=" flex flex-wrap  flex-col items-center  m-6 min-w-[230px] min-h-[150px] shadow-md rounded-md bg-white  hover:bg-pink-50 hover:cursor-pointer" >
             <div className="relative flex flex-col flex-wrap items-center bg-white max-w-30 mt-3 pt-3">
             <img src="https://medulance.com/assets/images/lab_test.png" alt="Description of the image" />
             </div>
             <p className="p-1 m-1 text-center font-semibold hover:text-pink-600 ">Lab Test <span className="font-semibold text-xl pt-1 mt-1  ">&#8594;</span> </p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

