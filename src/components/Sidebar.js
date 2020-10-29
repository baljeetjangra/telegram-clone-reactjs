import React from "react";
import "../assets/css/sidebar.css";
import {
  BorderColorOutlined,
  PhoneOutlined,
  QuestionAnswerOutlined,
  Search,
  Settings,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import SidebarThreads from "./SidebarThreads";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__search">
          <Search className="sidebar__searchicon" />
          <input type="text" placeholder="Search" className="sidebar__input" />
        </div>
        <IconButton variant="outlined" id="sidebar__button">
          <BorderColorOutlined />
        </IconButton>
      </div>
      <div className="sidebar__threads">
        <SidebarThreads />
      </div>
      <div className="sidebar__bottom">
        <Avatar className="sidebar__bottomAvatar" />
        <IconButton>
          <PhoneOutlined />
        </IconButton>
        <IconButton>
          <QuestionAnswerOutlined />
        </IconButton>
        <IconButton>
          <Settings />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
