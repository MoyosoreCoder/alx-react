import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Notifications from "./Notifications/Notifications";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <div id="root-notifications">
        <Notifications />
      </div>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
