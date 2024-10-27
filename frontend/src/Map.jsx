import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFpbGV5cGFuIiwiYSI6ImNtMmk1aTAzdTBqaXgya3EzczBuOTU0b3QifQ.Vfmnzm0EW8Z-3Dp3PhE8Aw";


const MapboxExample = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  

  useEffect(() => {
    // Initialize the map when the component is mounted
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/navigation-night-v1",
      center: [-71.092699, 42.357830],
      zoom: 15,
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
      <div
        ref={mapContainerRef}
        style={{ width: "100%", height: "1000px" }}
        className="map-container"
      />
    </div>
  );
};

export default MapboxExample;