import React from "react";
import "./style.css";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="App">
      <div className="test">
        <SideBar />
      </div>

      <div className="page-wrap test2">
        <h1>
          Cool Restaurant{" "}
          <span aria-label="burger" role="img">
            🍔🍕
          </span>
        </h1>
        <h2>Check out our offerings in the sidebar!</h2>
      </div>
    </div>
  );
}

export default App;
