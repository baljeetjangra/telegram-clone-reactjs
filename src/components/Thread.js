import { Avatar, IconButton } from "@material-ui/core";
import { MoreHoriz, Send } from "@material-ui/icons";
import React, { useState } from "react";
import "../assets/css/thread.css";

const Thread = () => {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    //set input blank
    setInput("");
  };
  return (
    <div className="thread">
      <div className="thread__header">
        <div className="thread__headerContents">
          <Avatar />
          <div className="thread__headerInfo">
            <h4>Thread Name</h4>
            <h5>Last Seen</h5>
          </div>
        </div>
        <IconButton>
          <MoreHoriz className="thread__headerOption" />
        </IconButton>
      </div>
      <div className="thread__messages"></div>
      <div className="thread__input">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Enter a Message..."
        />
        <IconButton onClick={sendMessage}>
          <Send />
        </IconButton>
      </div>
    </div>
  );
};

export default Thread;
