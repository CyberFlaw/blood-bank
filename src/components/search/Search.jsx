import React from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Divider from "@material-ui/core/Divider";

import "./Search.min.css";

export default function Search() {
  const [blood, setBlood] = React.useState("");
  const handleBloodChange = (event) => {
    setBlood(event.target.value);
  };

  const [branch, setBranch] = React.useState("");
  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };

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
        <h2 className="title">Search</h2>
        <Divider />
        <div className="search">
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
            <MenuItem value={"A+"}>A+</MenuItem>
            <MenuItem value={"O+"}>O+</MenuItem>
            <MenuItem value={"B+"}>B+</MenuItem>
            <MenuItem value={"AB+"}>AB+</MenuItem>
            <MenuItem value={"A-"}>A-</MenuItem>
            <MenuItem value={"O-"}>O-</MenuItem>
            <MenuItem value={"B-"}>B-</MenuItem>
            <MenuItem value={"AB-"}>AB-</MenuItem>
          </Select>

          <InputLabel id="branch" style={{ margin: 10 }}>
            Branch
          </InputLabel>
          <Select
            labelId="branch"
            id="branch"
            value={branch}
            style={{ margin: 10 }}
            onChange={handleBranchChange}
          >
            <MenuItem value={"CSE"}>CSE</MenuItem>
            <MenuItem value={"EC"}>EC</MenuItem>
            <MenuItem value={"EEE"}>EEE</MenuItem>
            <MenuItem value={"Mech"}>Mechanical</MenuItem>
            <MenuItem value={"Production"}>Production</MenuItem>
            <MenuItem value={"Chemical"}>Chemical</MenuItem>
            <MenuItem value={"Civil"}>Civil</MenuItem>
            <MenuItem value={"Architecture"}>Architecture</MenuItem>
          </Select>

          <Button variant="outlined" color="secondary" style={{ margin: 10 }}>
            Search
          </Button>
        </div>
        <Divider />
        <div className="results"></div>
      </Card>
    </div>
  );
}
