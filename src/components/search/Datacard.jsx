import React from "react";

import "./Search.min.css";

export default function Datacard(props) {
  console.log(props.ui);
  return (
    <div className="display-card">
      <p>Name: {props.ui.name}</p>
      <h3>Phone no: {props.ui.phonenumber}</h3>
      <h3>Email: {props.ui.email}</h3>
    </div>
  );
}
