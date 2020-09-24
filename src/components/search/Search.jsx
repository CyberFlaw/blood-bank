import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Divider from "@material-ui/core/Divider";

import "./Search.min.css";

export default function Search() {
  const [pass, setPass] = useState([]);

  const [blood, setBlood] = useState("");
  const handleBloodChange = (event) => {
    setBlood(event.target.value);
  };

  const requestOptions = (data) => {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": targetLink,
      },
      body: JSON.stringify(data),
    };
  };

  const handleClick = () => {
    let data = {
      bloodtype: blood,
    };
    fetch(targetLink, requestOptions(data))
      .then((res) => res.json())
      .then((res) => setPass(res))
      .then(() => console.log(pass));
  };

  const targetLink = "http://localhost:8888/api/user/search";

  return (
    <div className="conatiner">
      <div
        className="page"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
      </div>

      <div className="back"></div>
      <Card className="card" variant="outlined">
        <h2 className="title" style={{ marginTop: 10 }}>
          Search
        </h2>
        <Divider />
        <div className="search">
          <form
            action="http://localhost:8888/api/user/search"
            method="POST"
            className="search"
          >
            <InputLabel id="blood" style={{ margin: 10 }}>
              Blood Type
            </InputLabel>
            <Select
              labelId="blood"
              id="blood"
              value={blood}
              style={{ margin: 10 }}
              onChange={handleBloodChange}
            >
              <MenuItem value={"A+"} key={1}>
                A+
              </MenuItem>
              <MenuItem value={"O+"} key={2}>
                O+
              </MenuItem>
              <MenuItem value={"B+"} key={3}>
                B+
              </MenuItem>
              <MenuItem value={"A-"} key={4}>
                A-
              </MenuItem>
              <MenuItem value={"O-"} key={5}>
                O-
              </MenuItem>
              <MenuItem value={"B-"} key={6}>
                B-
              </MenuItem>
              <MenuItem value={"AB-"} key={7}>
                AB-
              </MenuItem>
              <MenuItem value={"AB+"} key={8}>
                AB+
              </MenuItem>
            </Select>

            <Button
              variant="outlined"
              color="secondary"
              style={{ margin: 10 }}
              onClick={handleClick}
            >
              Search
            </Button>
          </form>
        </div>
        <div className="display">
          {pass.map((text, i) => (
            <div className="display-card" key={text}>
              <p>Name: {pass[i].name}</p>
              <h3>Phone no: {pass[i].phonenumber}</h3>
              <h3>Email: {pass[i].email}</h3>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
