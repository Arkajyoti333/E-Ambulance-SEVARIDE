import React from 'react'
import bg from '../../Assets/ambulance.png'
import './homescreen.css'

const homescreen = () => {
  return (
    <div>

      {/* booking part */}
      <div className='booking'>
        <h1>24/7 Emergency</h1>
        <h1>Ambulance Care with SevaRide</h1>
        <h2>For Emergency Medical Service</h2>
        <p>Help / Rescues the Patient in case of the Emergency situation by doing just a click. Medulance Ambulance comes right in front of the door for help.</p>
        <div>
          <button>Book Now</button>
        </div>
        <div>
          <p>or</p>
          <h3>book our assistance</h3>
          <a href='tel:+9123813528' role='button' className='callnow'><i className='telno'></i>+91 9123813528</a>
        </div>
      </div>

      {/* background Part */}
      <div className='right-banner'>
        <img src={bg} alt='bg' className='bg'/>
      </div>
    </div>
  )
} 
export default homescreen