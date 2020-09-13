import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";

import "./Donate.min.css";

// const targetLink = "http://localhost:8888/api/user/register";

// let data = {
//   "name": 'sadw',
//   "email": "sissdamp@mail.com",
//   "gender": "male",
//   "age": 35,
//   "sem": "s3",
//   "branch": "cse",
//   "weight": 52,
//   "bloodtype": "a+",
//   "healthcon": "no",
// };

// const requestOptions = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": targetLink,
//   },
//   body: JSON.stringify(data),
// };

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Donate() {
  const classes = useStyles();

  const [age, setAge] = React.useState("");
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const [semester, setsemester] = React.useState("");
  const handleSemesterChange = (event) => {
    setsemester(event.target.value);
  };

  const [branch, setBranch] = React.useState("");
  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };

  const [blood, setBlood] = React.useState("");
  const handleBloodChange = (event) => {
    setBlood(event.target.value);
  };

  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [health, setHealth] = React.useState("");
  const handleHealthConditionChange = (event) => setHealth(event.target.value);

  const handleClick = (event) => {
    // fetch(targetLink, requestOptions)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
      console.log("Clicked");
  };

  return (
    <div>
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

      <Card className="card" variant="outlined">
        <div className="block">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="name" label="Name" />

            <TextField id="name" label="Email" type="email" />
            <div style={{ height: 1 }}></div>

            <TextField id="phone-number" label="Phone number" />
            <div style={{ height: 10 }}></div>
            <InputLabel id="age">Age</InputLabel>
            <Select
              labelId="age"
              id="demo-simple-select-required"
              value={age}
              onChange={handleAgeChange}
              className={classes.selectEmpty}
            >
              <MenuItem value={17}>17</MenuItem>
              <MenuItem value={18}>18</MenuItem>
              <MenuItem value={19}>19</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={21}>21</MenuItem>
              <MenuItem value={22}>22</MenuItem>
              <MenuItem value={23}>23</MenuItem>
              <MenuItem value={24}>24</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={26}>26</MenuItem>
              {/* <MenuItem value={27}>27</MenuItem>
          <MenuItem value={28}>28</MenuItem>
          <MenuItem value={29}>29</MenuItem>
          <MenuItem value={30}>30</MenuItem> */}
            </Select>

            <div style={{ height: 10 }}></div>
            <InputLabel id="gender">Gender</InputLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
            <div style={{ height: 10 }}></div>
            <InputLabel id="semester">Semester</InputLabel>
            <Select
              labelId="semester"
              id="semester"
              value={semester}
              onChange={handleSemesterChange}
            >
              <MenuItem value={"S1"}>S1</MenuItem>
              <MenuItem value={"S3"}>S3</MenuItem>
              <MenuItem value={"S5"}>S5</MenuItem>
              <MenuItem value={"S7"}>S7</MenuItem>
            </Select>
            <div style={{ height: 10 }}></div>
            <InputLabel id="branch">Branch</InputLabel>
            <Select
              labelId="branch"
              id="branch"
              value={branch}
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
            <div style={{ height: 10 }}></div>
            <InputLabel id="blood">Blood Type</InputLabel>
            <Select
              labelId="blood"
              id="blood"
              value={blood}
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
            <div style={{ height: 1 }}></div>

            <TextField id="name" label="Weight (in KG)" type="number" />

            <div style={{ height: 5 }}></div>
            <InputLabel id="health">Any Health Conditions?</InputLabel>
            <RadioGroup
              aria-label="health"
              name="health"
              value={health}
              onChange={handleHealthConditionChange}
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
            <div style={{ height: 10 }}></div>
            <Button variant="contained" color="primary" onClick={handleClick} style={{marginTop: -15}}>
              Submit
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}