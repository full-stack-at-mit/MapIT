import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import Map from "./Map.jsx";
import "./App.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFpbGV5cGFuIiwiYSI6ImNtMmk1aTAzdTBqaXgya3EzczBuOTU0b3QifQ.Vfmnzm0EW8Z-3Dp3PhE8Aw";

function App() {
  return (
    <>
      <Map />
    </>
  );
}

export default App;
