// task_2/dashboard/src/Notifications.js

import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";
import closeIcon from "./close-icon.png";

function Notifications() {
  const handleButtonClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="Notifications">
      <button
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          backgroundColor: "#fff",
          border: "none",
        }}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        <img src={closeIcon} alt="close" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{
            __html: getLatestNotification(),
          }}
        ></li>
      </ul>
    </div>
  );
}

export default Notifications;
