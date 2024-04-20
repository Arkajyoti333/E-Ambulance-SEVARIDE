import React, { useRef } from 'react'
import { useState } from 'react';
import './booknow.css';
import {DirectionsRenderer, GoogleMap, useLoadScript} from '@react-google-maps/api';
import { Autocomplete } from '@react-google-maps/api';


const libraries=['places'];
const mapContainerStyle={
    width:'1200px',
    height:'650px',
};
const center= {
    lat:22.5726,
    lng: 88.3639,
};
const centera= {
    lat:22.6293280,
    lng: 88.4521199,
};
function BookNow() {
    const {isLoaded,loadError}=useLoadScript({
        googleMapsApiKey:'AIzaSyArLrFzhkdvcDGuESCEKQMGY-Ob9UoihNQ',
        libraries,
    });
const [map, setmap] = useState(/**@type google.maps.Map*/(null))
const [directionsResponses, setdirectionsResponses] = useState(null)
const [distance, setdistance] = useState('')
const [duration, setduration] = useState('')

/** @type React.MutableRefObject<HTML.InputElement> */
const originRef=useRef()
/** @type React.MutableRefObject<HTML.InputElement> */
const destinationRef=useRef()

    if(loadError)
    {
        return <div>Error Loading Maps</div>;
    }
    if(!isLoaded)
    {
        return <div>Loading Maps</div>
    }
    /**DIRECTION ROUTE */
    
    async function calculateroute(){
        if(originRef.current.value ===''|| destinationRef.current.value ===''){
            return
        }
        //eslint-disable-next-line no-undef
        const directionService= new google.maps.DirectionsService()
        const results = await directionService.route({
            origin: originRef.current.value,
            destination: destinationRef.current.value,
            //eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING
        })
        setdirectionsResponses(results)
        setdistance(results.routes[0].legs[0].distance.text)
        setduration(results.routes[0].legs[0].duration.text)
    }
    function clearRoute(){
        setdirectionsResponses(null)
        setdistance('')
        setduration('')
        originRef.current.value=''
        destinationRef.current.value=''
    }

  return (
    <div className="home">
       <div className="searchbar">
            <p>Get a Ride</p>
           <Autocomplete>
                <input type="text" placeholder="Pickup Location" ref={originRef}></input>
           </Autocomplete>

           <Autocomplete>
                <input type="text" placeholder="Dropoff Location" ref={destinationRef}></input>
           </Autocomplete>
           <button type="button" onClick={calculateroute}>Search</button>
           <button type="button" onClick={()=>map.panTo(centera)}>Your Location</button>
           <button type="button" onClick={clearRoute}>Clear Route</button>
           <h3>Distance:{distance}</h3>
           <h3>Duration:{duration}</h3>

       </div>
       <div className="map">

            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
               options={{
                zoomControl:true,
                fullscreenControl:true,
                mapTypeControl:true,
               }}
                onLoad={(map)=>setmap(map)}
            >
                {directionsResponses && <DirectionsRenderer directions={directionsResponses}/>}
            </GoogleMap>
       </div>
    </div>
  )
}

export default BookNow