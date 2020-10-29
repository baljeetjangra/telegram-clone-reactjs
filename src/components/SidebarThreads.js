import { Avatar } from "@material-ui/core";
import React from "react";
import "../assets/css/sidebarThreads.css";

const SidebarThreads = () => {
  return (
    <div className="sidebarThreads">
      <Avatar />
      <div className="sidebarThreads__details">
        <h3 className="">Thread Name</h3>
        <p>info</p>
        <small className="sidebarThreads__timestamp">timestamp</small>
      </div>
    </div>
  );
};

export default SidebarThreads;
