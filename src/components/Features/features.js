import React from 'react'
import './features.css'
import touchtogo from '../../Assets/touch-Go.svg'
import pricing from '../../Assets/transparent-pricing.svg'
import econtact from '../../Assets/emergency-contact.svg'
import tips from '../../Assets/tips&advice.svg'
import booking from '../../Assets/advance-booking.svg'
import support from '../../Assets/customer support.svg'


const features = () => {
  return (
    <div className='feature'>
        <h2>App features</h2>
        <h3>Book ambulances in emergency or in advance. Experience our seamless platform.</h3>

      <div className='features-part'>

        <div className='features hover:bg-pink-200'>
                <img src={touchtogo} alt='touchtogo'  />
                <h5>On the go convenience</h5>
                <p>One touch access to medical emergency services.</p>
            </div>
            <div className='features hover:bg-pink-200'>
                <img src={pricing} alt='pricing'  />
                <h5>Transparent Pricing</h5>
                <p>Convenient mechanism, with online and cash payment mode.</p>
            </div>
            <div className='features hover:bg-pink-200'>
                <img src={tips} alt='tips'  />
                <h5>Tips & advice</h5>
                <p>Arm yourself with relevant information during any emergency scenario.</p>
            </div>
            <div className='features hover:bg-pink-200'>
                <img src={econtact} alt='econtact'  />
                <h5>Emergency Contact</h5>
                <p>Keep your dear ones close with emergency contact option.</p>
            </div>
            <div className='features hover:bg-pink-200'>
                <img src={booking} alt='booking'  />
                <h5>Advance Booking</h5>
                <p>Book ambulances in advance for hassle-free hospital visits.</p>
            </div>
            <div className='features hover:bg-pink-200'>
                <img src={support} alt='support'  />
                <h5>Easy to Talk</h5>
                <p>Seamless communication with ambulance drivers.</p>
            </div>
      </div>
            
    </div>
  )
}

export default features