import React from "react";
import GoogleMapReact from "google-map-react";
import MyMarker from "./components/MyMarker";


const distanceToMouse = (pt, mp) => {
  if (pt && mp) {
    
    return Math.sqrt(
      (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
    );
  }
};

const points = [{ id: 1, title: "GaTech", lat: 33.7756, lng: -84.3963 }];

const API_KEY = process.env.mapAPI;

export default function App() {
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
