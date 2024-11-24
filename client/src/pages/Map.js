// import React, { useEffect, useRef } from "react";
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoiaGFpbGV5cGFuIiwiYSI6ImNtMmk1aTAzdTBqaXgya3EzczBuOTU0b3QifQ.Vfmnzm0EW8Z-3Dp3PhE8Aw";

// const Map = () => {
//   const mapContainerRef = useRef(null);
//   const mapRef = useRef(null);

//   useEffect(() => {
//     mapRef.current = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: "mapbox://styles/mapbox/streets-v12",
//       center: [-71.092699, 42.357830],
//       zoom: 15,
//     });

//     new mapboxgl.Marker()
//     .setLngLat([12.554729, 55.70651])
//     .addTo(mapRef.current);

//     // dynamic sizing of map
//     const handleResize = () => {
//       mapRef.current.resize();
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       if (mapRef.current) {
//         mapRef.current.remove();
//       }
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div ref={mapContainerRef} className="w-full h-full absolute inset-0" />
//   );
// };

// export default Map;

import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFpbGV5cGFuIiwiYSI6ImNtMmk1aTAzdTBqaXgya3EzczBuOTU0b3QifQ.Vfmnzm0EW8Z-3Dp3PhE8Aw";

const Map = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // Initialize the map
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-71.092699, 42.357830],
      zoom: 15,
    });

    // Handle map click to add a marker
    const handleMapClick = (e) => {
      const { lng, lat } = e.lngLat;

      // Create a new marker and add it to the map
      const newMarker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setText(
            `Marker at Longitude: ${lng}, Latitude: ${lat}`
          )
        ) // Optional popup
        .addTo(mapRef.current);

      // Add the new marker to the state
      setMarkers((prevMarkers) => [...prevMarkers, { lng, lat, marker: newMarker }]);
    };

    mapRef.current.on("click", handleMapClick);

    // Cleanup on unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <div ref={mapContainerRef} className="w-full h-full absolute inset-0" />
  );
};

export default Map;
