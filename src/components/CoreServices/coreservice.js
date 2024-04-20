import React from 'react'
import './coreservice.css'

const coreservice = () => {
  return (
    <div className='core-service'>
    <h2>Core services</h2>
    <h3>We have various Plans for customers and dedicated Helpline number 24x7.</h3>

  <div className='features-part'>

    <div className='features hover:bg-pink-200'>
            <h5>Individual</h5>
            <p>Anyone can book ambulance through website and mobile app.</p>
        </div>
        <div className='features hover:bg-pink-200'>
            <h5>Hospital</h5>
            <p>We manage the end-to-end operations of the ambulance fleet of the hospital.</p>
        </div>
        <div className='features hover:bg-pink-200'>
            <h5>Corporate</h5>
            <p>Medulance is working with different corporate and providing ambulance for them.</p>
        </div>
        <div className='features hover:bg-pink-200'>
            <h5>Govt.</h5>
            <p>Medulance is working with the Government on a Public Private Partnership and PSU.</p>
        </div> 
  </div>   
</div>
  )
}

export default coreservice