import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
    {/* <div className='text-3xl text-red-600 font-bold text-center'>Error</div>  */}
    
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
      <div className="text-5xl font-bold text-gray-900">404</div>
      <div className="text-xl text-gray-900 mt-4">Oops! Something went wrong.</div>
      <div className="text-md text-gray-900 mt-4">Sorry ! Page Not Found.</div>
      <Link to="/" className="mt-8 border-2 shadow-lg border-red-500 p-2 rounded-md font-semibold text-gray-900 hover:border-blue-500 hover:border-2 transition-all duration-300 ease-in-out hover:tracking-wider">Back to Home &rarr;</Link>
    </div>
    </>
  )
}

export default Error;