import React, { useState } from "react";
import "../index.css";
import Sidebar from "../components/Sidebar";
import Map from "./Map";

const Home = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative h-screen w-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Map />
    </div>
  );
};

export default Home;
