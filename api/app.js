const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8888;

const authRoute = require("./routes/auth");
const searchRoute = require("./routes/search");

mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log(`Something went wrong... ${err}`);
    } else {
      console.log("Connected to Database...");
    }
  }
);

app.use(require("cors")())
app.use(express.json());

app.use("/api/user", authRoute);
app.use("/api/user", searchRoute);

app.get("/", (req, res) => {
  res.send("Api on your service...");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`An error occoured: ${err}`);
  } else {
    console.log(`Database connection started on port ${PORT}...`);
  }
});
