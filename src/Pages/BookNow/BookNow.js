import React from "react";





const InputFilled=(props)=>{
   
    return (
        <>
       <div className=" p-1">
       <input
      type="text"
      placeholder={props.text}
      className="border border-gray-400 p-2 rounded-md shadow-md mb-2"
    />
       </div>
        </>
    )
}

const btnpro=(props)=>{
    return(
        <>
        <div>        
        <button>
       {props.text}
        </button>
        </div>
        </>
    );
}

const BookNow = () => {
  return (
    <>
      <div className='text-3xl text-red-700 font-bold text-center  my-3'>Book Now  ! This page is under Devlopment</div>
     
    </>
  );
};

export default BookNow;
