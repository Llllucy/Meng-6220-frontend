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

//const func = ()=> {
//     const x = 33.7756;
//     const y = -84.3963;
//     return {lat: x, lng: y};
// }

const points = [{ id: 1, title: "GaTech", lat: 33.7756, lng: -84.3963 }];

//const points = [{ id: 1, title: "GaTech"}];
const API_KEY = "AIzaSyBIQtSgFH36RkiJnlAY5PzjSNcnztmeg-o";

export default function App() {
  const { state } = useLocation();
  //useEffect(()=> {console.log(state)});
  //useEffect(()=> {points.push(func());
  //console.log(points)};


  return (
    <div className="App">
      ;
      <GoogleMapReact
        bootstrapURLKeys={{
          
          key: API_KEY,
          language: "en",
          region: "US"
        }}
        defaultCenter={{ lat: 33.7756, lng: -84.3963 }}
        defaultZoom={15}
        distanceToMouse={distanceToMouse}
      >
        {points.map(({ lat, lng, id, title }) => {
          return (
            <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={title} />
          );
        }
        )}
      </GoogleMapReact>
    </div>
  );
}
