import React from "react";
import "./sidebar.css";
function Sidebar() {
  return (
    <div className="sidebarContainer">
      <span className="instruction">
        Press 'Add card' button to add the new Card. <br /> Use the 'Sort cards'
        button to sort the Cards by the increase. <br /> Press an X icon on the
        top right to delete them
      </span>
    </div>
  );
}

export default Sidebar;
