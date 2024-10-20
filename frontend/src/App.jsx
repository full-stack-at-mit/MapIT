import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./App.css"; // You can style your map container here

// Set the access token for Mapbox
mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFpbGV5cGFuIiwiYSI6ImNtMmk1aTAzdTBqaXgya3EzczBuOTU0b3QifQ.Vfmnzm0EW8Z-3Dp3PhE8Aw"; // Replace with your actual Mapbox token

function App() {
  const mapContainerRef = useRef(null); // Reference to the map container
  const mapRef = useRef(null); // Reference to the map object

  useEffect(() => {
    // Initialize the map when the component is mounted
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current, // Reference to the map container
      style: "mapbox://styles/mapbox/streets-v11", // Map style
      center: [-74.5, 40], // Initial map center [lng, lat]
      zoom: 9, // Initial zoom level
    });

    // Cleanup function to remove the map when the component is unmounted
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <div>
      <h1>Mapbox Map</h1>
      {/* Map container with specified height and width */}
      <div
        ref={mapContainerRef}
        style={{ width: "100%", height: "500px" }} // Adjust the map size here
        className="map-container"
      />
    </div>
  );
}

export default App;
