import React from "react";
import ActionBar from "./ActionBar";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`bg-white text-black transition-all duration-300 ease-in-out fixed top-0 left-0 h-full ${
        isOpen ? "w-64" : "w-14"
      } flex flex-col items-center shadow-lg`}
      style={{ zIndex: 10 }}
    >
      {isOpen && (
        <div className="p-4 space-y-4 w-full">
          <h2 className="text-xl font-semibold">MapIT</h2>
          <p className="text-sm">Welcome!</p>
        </div>
      )}
      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
        <ActionBar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Sidebar;
