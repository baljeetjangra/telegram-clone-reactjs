import React from "react";
import "../assets/css/sidebar.css";
import { Search } from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__search">
          <Search className="sidebar__searchicon" />
          <input type="text" placeholder="Search" className="sidebar__input" />
        </div>
      </div>
      <div className="sidebar__threads"></div>
      <div className="sidebar__bottom"></div>
    </div>
  );
};

export default Sidebar;
