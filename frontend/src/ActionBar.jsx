import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBookmark,
  faPlus,
  faUtensils,
  faBook,
  faChalkboardTeacher,
  faUser,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ActionBar = ({ toggleSidebar, isOpen }) => {
  return (
    <div className="flex flex-col items-center space-y-5 bg-gray-100 p-2 rounded-lg shadow-md">
      <FontAwesomeIcon icon={faUser} className="w-8 h-8 text-gray-500" />
      <FontAwesomeIcon icon={faSearch} className="w-8 h-8 text-gray-500" />
      <FontAwesomeIcon icon={faBookmark} className="w-8 h-8 text-gray-500" />
      <FontAwesomeIcon icon={faPlus} className="w-8 h-8 text-gray-500" />
      <FontAwesomeIcon icon={faUtensils} className="w-8 h-8 text-gray-500" />
      <FontAwesomeIcon icon={faBook} className="w-8 h-8 text-gray-500" />
      <FontAwesomeIcon
        icon={faChalkboardTeacher}
        className="w-8 h-8 text-gray-500"
      />
      <div className="w-full border-t border-gray-300 my-4"></div>

      <FontAwesomeIcon
        icon={isOpen ? faChevronLeft : faChevronRight}
        className="w-8 h-8 text-gray-500 cursor-pointer"
        onClick={toggleSidebar}
      />
    </div>
  );
};

export default ActionBar;
