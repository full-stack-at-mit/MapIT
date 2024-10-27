import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFpbGV5cGFuIiwiYSI6ImNtMmk1aTAzdTBqaXgya3EzczBuOTU0b3QifQ.Vfmnzm0EW8Z-3Dp3PhE8Aw";

const Map = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-71.092699, 42.357830],
      zoom: 15,
    });

    // dynamic sizing of map
    const handleResize = () => {
      mapRef.current.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={mapContainerRef} className="w-full h-full absolute inset-0" />
  );
};

export default Map;
