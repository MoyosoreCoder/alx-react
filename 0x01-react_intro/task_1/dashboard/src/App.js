<<<<<<< HEAD
import React from "react";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";
import holberton_logo from "./holberton-logo.jpg";

function App() {
  return (
    <>
      <div className="App-header">
        <img src={holberton_logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </>
  );
}

export default App;
=======
import React from "react";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";
import holberton_logo from "./holberton-logo.jpg";

function App() {
  return (
    <>
      <div className="App-header">
        <img src={holberton_logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </>
  );
}

export default App;
>>>>>>> a371e2aa4e6955be86bceb3f09f1702a54731cdc
