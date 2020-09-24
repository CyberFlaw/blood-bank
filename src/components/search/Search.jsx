import React from "react";
import Datacard from "./Datacard";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Divider from "@material-ui/core/Divider";

import "./Search.min.css";

export default function Search() {
  let searchData = [
    {
      _id: "5f5f8d4a57917b14dcc8032a",
      name: "asdasd",
      email: "asdawd@das.dsd",
      phonenumber: "314",
    },
  ];

  const [blood, setBlood] = React.useState("");
  const handleBloodChange = (event) => {
    setBlood(event.target.value);
  };

  const [branch, setBranch] = React.useState("");
  const handleBranchChange = (event) => {
    setBranch(event.target.value);
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

  const targetLink = "http://localhost:8888/api/user/search";

  const renderDetails = (data) => <Datacard ui={data} />;

  const handleClick = () => {
    let data = {
      branch: branch,
      bloodtype: blood,
    };
    fetch(targetLink, requestOptions(data))
      .then((res) => res.json())
      .then((res) => (searchData = res))
      .then(() => console.log(searchData));

    renderDetails(searchData);
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
        <div className="result">{renderDetails(searchData)}</div>
      </Card>
    </div>
  );
}
