import React, { useEffect, useState } from "react";
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
import { auth, db } from "../firebase";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    db.collection("threads").onSnapshot((snapshot) =>
      setThreads(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const addThread = () => {
    const threadName = prompt("Enter a threads name");
    if (threadName) {
      db.collection("threads").add({
        threadName: threadName,
      });
    }
  };
  console.log(threads);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__search">
          <Search className="sidebar__searchicon" />
          <input type="text" placeholder="Search" className="sidebar__input" />
        </div>
        <IconButton onClick={addThread} variant="outlined" id="sidebar__button">
          <BorderColorOutlined />
        </IconButton>
      </div>
      <div className="sidebar__threads">
        {threads.map(({ id, data: { threadName } }) => (
          <SidebarThreads key={id} id={id} threadName={threadName} />
        ))}
      </div>
      <div className="sidebar__bottom">
        <Avatar
          onClick={() => auth.signOut()}
          className="sidebar__bottomAvatar"
        />
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
