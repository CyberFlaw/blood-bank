import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import Quote from "./components/Quote";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="box">
          <div className="up">
            <p>Blood Bank</p>
          </div>
          <div className="down">
            <p>An initiative from GEC SFI</p>
          </div>
          <div className="donate-block">
            <Button variant="outlined" color="secondary">
              <Link
                to="/donate"
                style={{ textDecoration: "none", color: "Red" }}
              >
                Join Us
              </Link>
            </Button>
          </div>
          <div className="footer">
            <Quote />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
