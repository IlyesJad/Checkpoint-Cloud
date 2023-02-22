import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home (){
    const {isLoaded} = useLoadScript({
        googleMapsApiKey : "AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3l"
    });
    if(!isLoaded) return
    <div>
        Loading...
    </div>;
    return <Map />;
}
function Map(){
    return (
        <div>
            <p>here the card</p>
        <GoogleMap
        zoom={10}
        center={{lat:44,lng:-88}}
        // mapContainerClassName ='map-container'
        ></GoogleMap>
        </div>
    );
}