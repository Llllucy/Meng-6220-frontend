import React from "react";
import GoogleMapReact from "google-map-react";
import MyMarker from "./components/MyMarker";
import {useEffect} from 'react';
import { useLocation } from "react-router-dom";

const distanceToMouse = (pt, mp) => {
  if (pt && mp) {
    
    return Math.sqrt(
      (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
    );
  }
};

const point = [{ id: 1, title: "GaTech", lat: 33.7756, lng: -84.3963 }];
const randomLat=Math.random()
const randomLgn=Math.random()
const points = [{ id: 1, title: "User", lat: randomLat*20+30, lng: -randomLgn*40-80 }];

const API_KEY = "replace with a valid goole map API key";

export default function App() {
  const { state } = useLocation();
  return (
    <div className="App">;
      <GoogleMapReact bootstrapURLKeys={{
          key: API_KEY,
          language: "en",
          region: "US"
        }}
        defaultCenter={{ lat: randomLat*30+20, lng: -randomLgn*40-80 }}
        defaultZoom={5}
        distanceToMouse={distanceToMouse}>
        
        {points.map(({ lat, lng, id, title }) => {
          return (
            <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={title} />
          )
        })}
      </GoogleMapReact>
    </div>
  );
}
