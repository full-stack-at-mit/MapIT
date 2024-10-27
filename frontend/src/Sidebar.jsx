import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`bg-gray-800 text-white transition-all duration-300 ease-in-out fixed top-0 left-0 h-full ${
        isOpen ? "w-64" : "w-10"
      } flex flex-col items-center`}
      style={{ zIndex: 10 }} // want to overlay sidebar
    >
      <button
        onClick={toggleSidebar}
        className="absolute top-1/2 -right-4 transform bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-r-md shadow-lg"
      >
        {isOpen ? "<" : ">"}
      </button>

      {isOpen && (
        <div className="p-4 space-y-4">
          <h2 className="text-xl font-semibold">MapIT</h2>
          <p className="text-sm">Welcome!</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
