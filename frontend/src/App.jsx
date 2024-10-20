import { useState, useRef, useEffect } from "react";
import mapboxgl from 'mapbox-gl';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./Map.jsx";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1 className="text-3xl font-bold underline">Hello world!</h1>
//       <Map />
//     </>
//   );
// }

function App() {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaGFpbGV5cGFuIiwiYSI6ImNseGY3ZDJoazBvMXEybHB0d2NubnUyd3AifQ.AjWSefTCz2rgNWl8Brc6RA";

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  });

  return (
    <div
      style={{ height: "100%" }}
      ref={mapContainerRef}
      className="map-container"
    />
  );
}

export default App;
